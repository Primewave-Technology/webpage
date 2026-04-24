import React from 'react';
import { motion } from 'motion/react';
import { Box, ShieldAlert, Cpu, Network, Database, Layers } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  const capabilities = [
    {
      title: "Vector-to-Vision Reasoning",
      description: "Direct analysis of 3D mesh data, point clouds, and technical drawings. Go beyond pixels to true spatial understanding.",
      icon: <Box size={20} />,
      className: "md:col-span-1",
      delay: 0.1,
      accent: "text-amber-500"
    },
    {
      title: "Air-Gapped IP Protection",
      description: "Engineered for aerospace and defense. Your sensitive prototypes stay on local servers, never hitting the open web.",
      icon: <ShieldAlert size={20} />,
      className: "md:col-span-1",
      delay: 0.2,
      accent: "text-amber-700"
    },
    {
      title: "Design-Aware Logic",
      description: "Reason about scale, materials, and structural constraints locally. Native integration with existing BIM workflows.",
      icon: <Cpu size={20} />,
      className: "md:col-span-1",
      delay: 0.3,
      accent: "text-amber-500"
    }
  ];

  return (
    <section id="capabilities" className="max-w-7xl mx-auto px-12 py-20 relative">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 tracking-tight">Technical Capabilities</h2>
        <p className="text-neutral-500 max-w-xl text-sm">
          Engineered for the most demanding technical workflows, Primewave brings powerful inference directly to your infrastructure.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilities.map((cap, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: cap.delay, duration: 0.6 }}
            className={`glass p-8 rounded-xl relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300 flex flex-col`}
          >
            <div className={`w-10 h-10 mb-6 flex items-center justify-center ${cap.accent} bg-neutral-900 border border-white/5`}>
              {cap.icon}
            </div>
            <h3 className="font-bold mb-3 uppercase tracking-wider text-xs text-white">
              {cap.title}
            </h3>
            <p className="text-[12px] text-neutral-500 leading-relaxed">
              {cap.description}
            </p>
            
            {/* Scanline-like highlight on hover */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-full group-hover:translate-y-0" />
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap justify-between items-center border-t border-white/5 pt-8 gap-8">
        <div className="flex gap-12">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-neutral-600 uppercase font-bold tracking-[0.2em]">Core Protocol</span>
            <span className="text-xs font-mono text-amber-500/70">GEOM-CORE-V2</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-neutral-600 uppercase font-bold tracking-[0.2em]">Model Weights</span>
            <span className="text-xs font-mono text-amber-700/70">D-SPATIAL-LLM-80B</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-neutral-600 uppercase font-bold tracking-[0.2em]">Compute Target</span>
            <span className="text-xs font-mono text-white/40">ON-PREM-NVIDIA</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-neutral-700">
          <Database size={16} />
          <Network size={16} />
          <Layers size={16} />
        </div>
      </div>
    </section>
  );
};
