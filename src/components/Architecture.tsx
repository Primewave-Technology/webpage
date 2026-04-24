import React from 'react';
import { motion } from 'motion/react';
import { Server, Cpu, Globe, Database } from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="max-w-7xl mx-auto px-12 py-32 border-t border-white/5">
      <div className="text-center mb-20">
        <span className="tag mb-6 inline-block">Architecture</span>
        <h2 className="text-4xl font-bold tracking-tight">The Primewave <br/><span className="text-amber-600">Hardware Interface.</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
        <div className="glass p-12 flex flex-col items-center text-center">
          <Server className="text-neutral-500 mb-6" />
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">Host Node</h3>
          <p className="text-[10px] text-neutral-500 leading-relaxed uppercase tracking-wider">
            Optimized for local cluster management and API brokering.
          </p>
        </div>
        <div className="glass p-12 flex flex-col items-center text-center">
          <Cpu className="text-amber-500 mb-6" />
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">Inference Engine</h3>
          <p className="text-[10px] text-neutral-500 leading-relaxed uppercase tracking-wider">
            Tensor-optimized spatial reasoning at zero latency.
          </p>
        </div>
        <div className="glass p-12 flex flex-col items-center text-center">
          <Database className="text-neutral-500 mb-6" />
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">Geometry Store</h3>
          <p className="text-[10px] text-neutral-500 leading-relaxed uppercase tracking-wider">
            Secure vault for proprietary meshes and point clouds.
          </p>
        </div>
        <div className="glass p-12 flex flex-col items-center text-center">
          <Globe className="text-amber-800 mb-6" />
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">Integration Bus</h3>
          <p className="text-[10px] text-neutral-500 leading-relaxed uppercase tracking-wider">
            Seamless BIM/CAD handshake without cloud transit.
          </p>
        </div>
      </div>
    </section>
  );
};
