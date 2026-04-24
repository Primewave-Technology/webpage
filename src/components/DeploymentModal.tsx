import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Terminal, Shield, Cpu, CheckCircle2 } from 'lucide-react';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentModal: React.FC<DeploymentModalProps> = ({ isOpen, onClose }) => {
  const [logs, setLogs] = React.useState<string[]>([]);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (isOpen) {
      setLogs(['Establishing secure tunnel...', 'Authenticating air-gapped node...']);
      const sequence = [
        'Checking hardware integrity...',
        'Loading geometry kernel v4.2.1...',
        'Initializing local vector database...',
        'Allocating GPU memory (80GB reserved)...',
        'Booting Primewave Spatial Engine...',
        'System ready. Sovereign deployment optimized.'
      ];

      let i = 0;
      const interval = setInterval(() => {
        if (i < sequence.length) {
          setLogs(prev => [...prev, sequence[i]]);
          setProgress(((i + 1) / sequence.length) * 100);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 800);

      return () => clearInterval(interval);
    } else {
      setLogs([]);
      setProgress(0);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md" 
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="w-full max-w-2xl bg-[#0a0a0a] border border-amber-500/20 rounded-xl overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.1)] relative z-10"
          >
            {/* Header */}
            <div className="bg-neutral-900 px-6 py-4 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Terminal size={18} className="text-amber-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">Secure Deployment Console</span>
              </div>
              <button 
                onClick={onClose}
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-8 flex items-center gap-6">
                <div className="w-16 h-16 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-center justify-center">
                  <Cpu size={32} className="text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">Primewave Node 01</h3>
                  <p className="text-xs text-neutral-500 font-mono">ENCRYPTED SERRVER: LOCAL_SECURE_TRUST_V2</p>
                </div>
                <div className="text-right">
                    <span className="text-xs font-mono text-amber-500">{Math.round(progress)}%</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-8">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" 
                />
              </div>

              {/* Logs */}
              <div className="bg-black p-4 rounded-lg font-mono text-[10px] text-neutral-400 h-48 overflow-y-auto space-y-1 border border-white/5">
                {logs.map((log, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-neutral-600">[{new Date().toLocaleTimeString()}]</span>
                    <span className={i === logs.length - 1 ? "text-amber-500" : ""}>{log}</span>
                  </div>
                ))}
                {progress === 100 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-green-500 mt-4"
                  >
                    <CheckCircle2 size={12} />
                    <span>SYSTEM ONLINE</span>
                  </motion.div>
                )}
              </div>

              <div className="mt-8 flex justify-end">
                <button 
                  onClick={onClose}
                  className="px-6 py-2 bg-amber-500 text-black font-bold uppercase text-[10px] tracking-widest hover:bg-amber-400 transition-colors"
                >
                  {progress === 100 ? 'Access Control Panel' : 'Abort Mission'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
