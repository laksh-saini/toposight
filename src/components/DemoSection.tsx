import { useState } from 'react';
import { motion } from 'framer-motion';
import { TerrainVisualization } from './TerrainVisualization';
import { Info, RotateCcw, ZoomIn, MousePointer } from 'lucide-react';

export function DemoSection() {
  const [showFuture, setShowFuture] = useState(false);

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-primary mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            MVP Demo
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Interactive Terrain
            <br />
            <span className="text-gradient">Evolution Preview</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            This demo illustrates how terrain may evolve under long-term climate 
            and environmental stress. Toggle between present and future to see predicted changes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Demo container */}
          <div className="glass-card rounded-3xl p-2 glow-primary">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
              <TerrainVisualization showFuture={showFuture} />

              {/* Controls overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                {/* Time toggle */}
                <div className="flex items-center gap-2 glass-card rounded-full p-1">
                  <button
                    onClick={() => setShowFuture(false)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      !showFuture
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Present Day
                  </button>
                  <button
                    onClick={() => setShowFuture(true)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      showFuture
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    30 Years Later
                  </button>
                </div>

                {/* Instructions */}
                <div className="hidden md:flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MousePointer className="w-3 h-3" /> Drag to rotate
                  </span>
                  <span className="flex items-center gap-1">
                    <ZoomIn className="w-3 h-3" /> Scroll to zoom
                  </span>
                </div>
              </div>

              {/* Status indicator */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${showFuture ? 'bg-amber-warm' : 'bg-forest'} animate-pulse`} />
                <span className="text-xs text-foreground/80 font-medium">
                  {showFuture ? 'Projected: 2055' : 'Current: 2025'}
                </span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-8 glass-card rounded-xl p-6"
          >
            <div className="flex items-start gap-3 mb-4">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">About this visualization:</span> The terrain model 
                demonstrates conceptual changes including flooding in low-elevation areas, coastal erosion, 
                and general elevation shifts. Colors indicate elevation zones from water (blue) to highlands (brown).
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-ocean" />
                <span className="text-muted-foreground">Water / Flooded</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-[#267373]" />
                <span className="text-muted-foreground">Coastal</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-forest" />
                <span className="text-muted-foreground">Land</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-[#665940]" />
                <span className="text-muted-foreground">Highlands</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
