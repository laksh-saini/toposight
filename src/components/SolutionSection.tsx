import { motion } from 'framer-motion';
import { Layers, Brain, BarChart3, Globe } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Multi-Layer Analysis',
    description: 'Combine satellite imagery, elevation models, and climate data into unified terrain intelligence.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Prediction',
    description: 'Machine learning models simulate how land evolves under various climate scenarios.',
  },
  {
    icon: BarChart3,
    title: 'Scenario Comparison',
    description: 'Compare multiple futures—best case, worst case, and probable outcomes.',
  },
  {
    icon: Globe,
    title: '20-30 Year Horizon',
    description: "Plan for the actual lifespan of your infrastructure, not just today's conditions.",
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Layered visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="absolute rounded-2xl glass-card"
                    style={{
                      width: `${280 - i * 40}px`,
                      height: `${280 - i * 40}px`,
                      transform: `translateY(${i * 20}px) rotateX(60deg) rotateZ(${i * 5}deg)`,
                      background: i === 0 
                        ? 'linear-gradient(135deg, hsl(200, 60%, 25%, 0.5), hsl(160, 40%, 30%, 0.3))'
                        : i === 1
                        ? 'linear-gradient(135deg, hsl(160, 40%, 30%, 0.4), hsl(38, 92%, 50%, 0.2))'
                        : i === 2
                        ? 'linear-gradient(135deg, hsl(38, 92%, 50%, 0.3), hsl(200, 60%, 25%, 0.2))'
                        : 'linear-gradient(135deg, hsl(220, 20%, 20%, 0.5), hsl(220, 20%, 15%, 0.3))',
                    }}
                  />
                ))}
              </div>

              {/* Labels */}
              <div className="absolute -right-4 top-1/4 text-xs text-muted-foreground glass-card px-3 py-1 rounded-full">
                Satellite Data
              </div>
              <div className="absolute -right-8 top-1/2 text-xs text-muted-foreground glass-card px-3 py-1 rounded-full">
                Climate Models
              </div>
              <div className="absolute -left-4 bottom-1/3 text-xs text-muted-foreground glass-card px-3 py-1 rounded-full">
                GIS Analytics
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Solution</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                Terrain Intelligence
                <br />
                <span className="text-gradient">For Long-Term Decisions</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Our platform combines satellite data, GIS, climate models, and AI to simulate 
                how land and surroundings evolve over 20–30 years. Not deterministic predictions—
                scenario-based forecasting for informed decisions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
