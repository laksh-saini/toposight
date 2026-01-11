import { motion } from 'framer-motion';
import { Circle, CheckCircle2, ArrowRight } from 'lucide-react';

const milestones = [
  {
    phase: 'MVP',
    title: 'Terrain & Flood Evolution',
    description: 'Interactive 3D visualization of terrain changes over 30 years',
    status: 'current',
    features: ['3D terrain modeling', 'Time-lapse visualization', 'Basic flood simulation'],
  },
  {
    phase: 'Next',
    title: 'Risk Scoring & Scenarios',
    description: 'Quantitative risk assessment with multiple climate scenarios',
    status: 'upcoming',
    features: ['Risk scoring system', 'Scenario comparison', 'Report generation'],
  },
  {
    phase: 'Future',
    title: 'Enterprise Integration',
    description: 'Full platform with APIs, BIM/CAD integration, and monitoring',
    status: 'future',
    features: ['API access', 'BIM/CAD plugins', 'Real-time monitoring'],
  },
];

export function RoadmapSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-earth-charcoal/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Roadmap</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            From MVP to Platform
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our development trajectory toward a complete terrain intelligence platform.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-border hidden md:block" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="flex gap-6 md:gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${
                      milestone.status === 'current' 
                        ? 'bg-primary ring-4 ring-primary/20' 
                        : 'bg-muted border-2 border-border'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 glass-card rounded-2xl p-6 ${
                    milestone.status === 'current' ? 'border-primary/30 glow-primary' : ''
                  }`}>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                          milestone.status === 'current'
                            ? 'bg-primary/20 text-primary'
                            : milestone.status === 'upcoming'
                            ? 'bg-ocean/20 text-ocean-light'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {milestone.phase}
                        </span>
                        <h3 className="font-display text-xl font-semibold">{milestone.title}</h3>
                        <p className="text-muted-foreground mt-1">{milestone.description}</p>
                      </div>
                      {milestone.status === 'current' && (
                        <div className="shrink-0 flex items-center gap-1 text-xs text-primary">
                          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          In Progress
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {milestone.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-muted/50 text-sm text-muted-foreground"
                        >
                          {milestone.status === 'current' ? (
                            <CheckCircle2 className="w-3 h-3 text-primary" />
                          ) : (
                            <Circle className="w-3 h-3" />
                          )}
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
