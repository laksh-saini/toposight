import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

interface TerrainMeshProps {
  showFuture: boolean;
}

function TerrainMesh({ showFuture }: TerrainMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetHeights = useRef<Float32Array | null>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(10, 10, 64, 64);
    const positions = geo.attributes.position.array as Float32Array;
    
    // Create base terrain with noise
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      
      // Multi-layered noise for realistic terrain
      const noise1 = Math.sin(x * 0.5) * Math.cos(y * 0.5) * 1.5;
      const noise2 = Math.sin(x * 1.2 + 1) * Math.cos(y * 0.8) * 0.5;
      const noise3 = Math.sin(x * 2.5) * Math.cos(y * 2.5) * 0.2;
      
      positions[i + 2] = noise1 + noise2 + noise3;
    }
    
    geo.computeVertexNormals();
    return geo;
  }, []);

  // Calculate future terrain (with erosion, flooding effects)
  const futureHeights = useMemo(() => {
    const positions = geometry.attributes.position.array as Float32Array;
    const future = new Float32Array(positions.length);
    
    for (let i = 0; i < positions.length; i += 3) {
      const currentHeight = positions[i + 2];
      const x = positions[i];
      const y = positions[i + 1];
      
      // Simulate erosion in valleys, flooding in low areas
      let change = 0;
      
      // Lower areas get flooded (water level rise)
      if (currentHeight < 0.3) {
        change = -0.5 - Math.random() * 0.3;
      }
      // Mid areas erode slightly
      else if (currentHeight < 1.0) {
        change = -0.2 - Math.random() * 0.2;
      }
      // High areas erode more
      else {
        change = -0.4 - Math.random() * 0.3;
      }
      
      // Add some coastal flooding effect
      const distFromCenter = Math.sqrt(x * x + y * y);
      if (distFromCenter > 3.5 && currentHeight < 0.5) {
        change -= 0.3;
      }
      
      future[i] = positions[i];
      future[i + 1] = positions[i + 1];
      future[i + 2] = currentHeight + change;
    }
    
    return future;
  }, [geometry]);

  useFrame(() => {
    if (!meshRef.current) return;
    
    const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
    const originalPositions = geometry.attributes.position.array as Float32Array;
    
    const target = showFuture ? futureHeights : originalPositions;
    
    // Smooth interpolation
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 2] += (target[i + 2] - positions[i + 2]) * 0.05;
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
  });

  // Color based on height
  const colors = useMemo(() => {
    const positions = geometry.attributes.position.array as Float32Array;
    const colorArray = new Float32Array((positions.length / 3) * 3);
    
    for (let i = 0; i < positions.length; i += 3) {
      const height = positions[i + 2];
      const colorIndex = i;
      
      // Deep blue for water/low areas
      if (height < 0) {
        colorArray[colorIndex] = 0.1;
        colorArray[colorIndex + 1] = 0.3;
        colorArray[colorIndex + 2] = 0.5;
      }
      // Teal for coastal
      else if (height < 0.5) {
        colorArray[colorIndex] = 0.15;
        colorArray[colorIndex + 1] = 0.45;
        colorArray[colorIndex + 2] = 0.45;
      }
      // Green for land
      else if (height < 1.0) {
        colorArray[colorIndex] = 0.2;
        colorArray[colorIndex + 1] = 0.5;
        colorArray[colorIndex + 2] = 0.3;
      }
      // Brown/tan for highlands
      else {
        colorArray[colorIndex] = 0.4;
        colorArray[colorIndex + 1] = 0.35;
        colorArray[colorIndex + 2] = 0.25;
      }
    }
    
    return colorArray;
  }, [geometry]);

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -0.5, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={geometry.attributes.position.count}
          array={geometry.attributes.position.array}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <meshStandardMaterial
        vertexColors
        wireframe={false}
        side={THREE.DoubleSide}
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  );
}

function GridHelper() {
  return (
    <gridHelper args={[12, 24, '#1a3a4a', '#0d1f28']} position={[0, -1.5, 0]} />
  );
}

interface TerrainVisualizationProps {
  showFuture: boolean;
}

export function TerrainVisualization({ showFuture }: TerrainVisualizationProps) {
  return (
    <div className="w-full h-full terrain-canvas rounded-2xl overflow-hidden">
      <Canvas
        camera={{ position: [8, 6, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffeedd" />
        <directionalLight position={[-5, 5, -5]} intensity={0.3} color="#aaccff" />
        
        <TerrainMesh showFuture={showFuture} />
        <GridHelper />
        
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={5}
          maxDistance={15}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        <fog attach="fog" args={['#0a1015', 10, 25]} />
      </Canvas>
    </div>
  );
}
