import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowRight } from 'lucide-react';

interface HeroProps {
  onDeployClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDeployClick }) => {
  return (
    <section className="relative px-12 py-24 flex items-center min-h-[70vh]">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="w-full md:w-3/5">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="tag mb-8 inline-block"
          >
            On-Premises Multi-Modal LLM
          </motion.div>
          
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9]"
          >
            THE FUTURE OF DESIGN, <br/>
            <span className="text-gradient">HOSTED BEHIND YOUR FIREWALL.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-neutral-400 mb-12 leading-relaxed max-w-xl"
          >
            Unlock a multi-modal LLM engineered to understand the language of geometry. Reason over proprietary 3D models and BIM data without ever sending a single coordinate to the cloud.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-8 mb-12"
          >
            <div className="flex flex-col border-l-2 border-amber-500 pl-4">
              <span className="text-3xl font-mono font-bold text-white">0.0ms</span>
              <span className="text-[10px] uppercase text-neutral-500 font-bold tracking-widest mt-1">Network Latency</span>
            </div>
            <div className="flex flex-col border-l-2 border-amber-800 pl-4">
              <span className="text-3xl font-mono font-bold text-white">100%</span>
              <span className="text-[10px] uppercase text-neutral-500 font-bold tracking-widest mt-1">IP Retention</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button 
              onClick={onDeployClick}
              className="px-8 py-3 bg-white text-black font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-amber-500 transition-colors"
            >
              Initialize Deployment
            </button>
            <a 
              href="#architecture"
              className="px-8 py-3 border border-white/10 text-white font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white/5 transition-colors inline-block text-center"
            >
              Access Documentation
            </a>
          </motion.div>
        </div>

        {/* Decorative mask for the Three.js mesh area */}
        <div className="hidden lg:block w-2/5 aspect-square relative pointer-events-none">
          <div className="absolute inset-0 border border-white/5 bg-white/[0.01]" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-500/50" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-500/50" />
        </div>
      </div>
    </section>
  );
};
