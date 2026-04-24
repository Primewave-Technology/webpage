import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-8 px-12 pb-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-600 border-t border-white/5 pt-8 z-10 w-full">
        <div className="flex gap-6 font-mono mb-4 md:mb-0">
          <span>v4.2.1-STABLE</span>
          <span className="hidden sm:inline">BUILD: HEX-009A2</span>
        </div>
        
        <div className="uppercase tracking-[0.3em] font-bold text-neutral-500 mb-4 md:mb-0 text-center">
          &copy; 2024 PRIMEWAVE — SOVEREIGN SPATIAL INTELLIGENCE
        </div>
        
        <div className="flex gap-4 items-center font-mono">
          <span>SYSTEM STATUS: <span className="text-amber-500/70">OPTIMAL</span></span>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-pulse" />
        </div>
      </div>
    </footer>
  );
};
