import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-forest flex items-center justify-center">
              <Globe2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-semibold">TopoSight</span>
          </div>

          <p className="text-muted-foreground text-sm text-center md:text-left">
            Terrain Intelligence for Infrastructure That Lasts
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <span>© 2025 TopoSight</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
