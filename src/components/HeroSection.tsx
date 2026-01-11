import { useState } from 'react';
import { motion } from 'framer-motion';
import { TerrainVisualization } from './TerrainVisualization';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  const [showFuture, setShowFuture] = useState(false);

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ocean/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-forest/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Climate Intelligence Platform
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              See How Land Evolves —{' '}
              <span className="text-gradient">Before You Build</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              We predict how terrain, climate, and surroundings change over decades 
              to help infrastructure decisions last.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="xl" onClick={() => {
                document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <Play className="w-5 h-5" />
                View Terrain Demo
              </Button>
              <Button variant="heroOutline" size="xl" onClick={() => {
                document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                How It Works
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-forest rounded-full" />
                <span>Satellite Data</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-ocean rounded-full" />
                <span>Climate Models</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span>AI Prediction</span>
              </div>
            </div>
          </motion.div>

          {/* Right: 3D Terrain */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="aspect-square max-w-[600px] mx-auto relative">
              {/* Glow effect behind terrain */}
              <div className="absolute inset-0 bg-gradient-to-b from-ocean/30 via-transparent to-forest/20 rounded-3xl blur-2xl" />
              
              {/* Terrain container */}
              <div className="relative h-full glass-card rounded-3xl p-4 glow-accent">
                <TerrainVisualization showFuture={showFuture} />
                
                {/* Time toggle */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 glass-card rounded-full p-1">
                  <button
                    onClick={() => setShowFuture(false)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      !showFuture 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Present Day
                  </button>
                  <button
                    onClick={() => setShowFuture(true)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      showFuture 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    30 Years Later
                  </button>
                </div>

                {/* Label */}
                <div className="absolute top-4 left-4 text-xs text-muted-foreground">
                  Interactive 3D Terrain • Drag to rotate
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-muted-foreground rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
