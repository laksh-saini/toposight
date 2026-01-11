import { motion } from 'framer-motion';
import { Building2, HardHat, Landmark, TrendingUp, Users } from 'lucide-react';

const markets = [
  {
    icon: Building2,
    title: 'Infrastructure Developers',
    description: 'De-risk long-term projects with terrain foresight',
  },
  {
    icon: HardHat,
    title: 'EPC Contractors',
    description: 'Build with confidence in changing environments',
  },
  {
    icon: Landmark,
    title: 'Government Planners',
    description: 'Inform policy with climate-aware land data',
  },
  {
    icon: TrendingUp,
    title: 'Institutional Investors',
    description: 'Assess long-term asset resilience',
  },
  {
    icon: Users,
    title: 'Real Estate Firms',
    description: 'Evaluate land value over decades, not years',
  },
];

export function MarketSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Target Market</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Built for Long-Term
            <br />
            <span className="text-gradient">Decision Makers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Organizations making land decisions that need to last 20-30+ years.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {markets.map((market, index) => (
            <motion.div
              key={market.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:bg-muted/30 transition-all duration-300 group min-w-[280px]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <market.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold">{market.title}</h3>
                <p className="text-muted-foreground text-sm">{market.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
