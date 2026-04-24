import React from 'react';
import { motion } from 'motion/react';

interface NavbarProps {
  onDeployClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDeployClick }) => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex justify-between items-center px-12 py-8 max-w-7xl mx-auto relative z-50"
    >
      <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="w-10 h-10 border-2 border-amber-500 flex items-center justify-center font-bold text-xl text-amber-500 bg-amber-500/5">
          P
        </div>
        <div className="flex flex-col">
          <span className="font-bold tracking-widest text-lg text-white">PRIMEWAVE</span>
          <span className="text-[10px] text-neutral-500 uppercase tracking-tighter font-mono">Spatial Reasoning Systems</span>
        </div>
      </div>
      
      <nav className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-widest text-neutral-500">
        <a href="#security" className="hover:text-amber-500 transition-colors">Security Protocol</a>
        <a href="#capabilities" className="hover:text-amber-500 transition-colors">Capabilities</a>
        <a href="#architecture" className="hover:text-amber-500 transition-colors">Architecture</a>
        <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
      </nav>
      
 
    </motion.nav>
  );
};
