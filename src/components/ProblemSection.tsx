import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Clock, Droplets } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Snapshots in Time',
    description: 'Traditional surveys capture only current conditions, missing long-term changes.',
  },
  {
    icon: Droplets,
    title: 'Hidden Flood Risk',
    description: 'Climate-driven flooding patterns evolve, but assessments remain static.',
  },
  {
    icon: TrendingDown,
    title: 'Erosion & Subsidence',
    description: 'Geological shifts go unaccounted, leading to foundation failures.',
  },
  {
    icon: AlertTriangle,
    title: 'Asset Depreciation',
    description: 'Infrastructure built without foresight depreciates faster than expected.',
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-earth-charcoal/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Infrastructure Decisions Based on
            <br />
            <span className="text-muted-foreground">Incomplete Data</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Site surveys assess current terrain but ignore long-term climate change, 
            geological shifts, and urban pressure—leading to costly failures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:bg-muted/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass-card rounded-2xl p-8 text-center max-w-3xl mx-auto border-destructive/20"
        >
          <p className="text-xl text-muted-foreground">
            <span className="text-foreground font-semibold">Result:</span> Billions spent 
            on infrastructure that fails within decades due to unforeseen environmental changes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
