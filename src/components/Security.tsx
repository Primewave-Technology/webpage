import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HardDrive, Lock } from 'lucide-react';

export const Security: React.FC = () => {
  const securityFeatures = [
    {
      title: "Encrypted at Rest",
      desc: "All model weights and inference data are encrypted using hardware-level AES-256.",
      icon: <Lock size={18} />
    },
    {
      title: "Zero External Access",
      desc: "No telemetry, no phone-home, no cloud heartbeats. 100% network isolation guaranteed.",
      icon: <ShieldCheck size={18} />
    },
    {
      title: "Dedicated Compliance",
      desc: "FIPS 140-2 and SOC2 Type II compatible on-premises deployments.",
      icon: <HardDrive size={18} />
    }
  ];

  return (
    <section id="security" className="max-w-7xl mx-auto px-12 py-32 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <span className="tag mb-6 inline-block">Security Protocol</span>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Designed for <br/><span className="text-amber-500">Extreme Privacy.</span></h2>
          <p className="text-neutral-500 leading-relaxed mb-10">
            Primewave was built from the ground up to solve the "Privacy Paradox" of modern AI. We don't just provide security; we provide physical sovereignty over your intelligence infrastructure.
          </p>
          <div className="space-y-6">
            {securityFeatures.map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 text-amber-500">{f.icon}</div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">{f.title}</h4>
                  <p className="text-xs text-neutral-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-amber-500/10 to-amber-900/10 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-48 h-48 border-2 border-amber-500/30 rounded-full flex items-center justify-center"
            >
              <div className="w-32 h-32 border border-amber-500/50 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.2)]">
                <ShieldCheck size={48} className="text-amber-500" />
              </div>
            </motion.div>
            <div className="absolute bottom-10 left-10 right-10 p-4 border border-white/10 bg-black/40 backdrop-blur-md rounded-lg">
              <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">
                <span>Node Status</span>
                <span className="text-amber-500">Active</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                   animate={{ x: ['-100%', '100%'] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                   className="w-1/3 h-full bg-amber-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
