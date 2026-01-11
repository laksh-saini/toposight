import { motion } from 'framer-motion';
import { Satellite, MapPin, Cloud, Cpu, Server, Eye } from 'lucide-react';

const technologies = [
  {
    icon: Satellite,
    name: 'Satellite Imagery',
    description: 'High-resolution optical and radar data from multiple sources',
    color: 'bg-ocean/20 text-ocean-light',
  },
  {
    icon: MapPin,
    name: 'Digital Elevation Models',
    description: 'Precise topographic data for 3D terrain reconstruction',
    color: 'bg-forest/20 text-forest-light',
  },
  {
    icon: Cloud,
    name: 'Climate Models',
    description: 'IPCC-aligned projections for temperature, precipitation, and sea level',
    color: 'bg-secondary/30 text-secondary-foreground',
  },
  {
    icon: Cpu,
    name: 'AI / Machine Learning',
    description: 'Spatial-temporal prediction models trained on historical data',
    color: 'bg-primary/20 text-primary',
  },
  {
    icon: Server,
    name: 'Cloud Processing',
    description: 'Scalable infrastructure for complex geospatial computations',
    color: 'bg-accent/30 text-accent-foreground',
  },
  {
    icon: Eye,
    name: '3D Visualization',
    description: 'Interactive WebGL rendering for intuitive exploration',
    color: 'bg-muted text-muted-foreground',
  },
];

export function TechnologySection() {
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
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Technology</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Built on Proven Science
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We integrate established technologies into a unified platform 
            for terrain evolution analysis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card rounded-2xl p-6 hover:bg-muted/20 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <tech.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{tech.name}</h3>
              <p className="text-muted-foreground text-sm">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-forest rounded-full" />
            <span>Open-source GIS libraries</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-ocean rounded-full" />
            <span>Peer-reviewed climate data</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>Industry-standard AI frameworks</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
