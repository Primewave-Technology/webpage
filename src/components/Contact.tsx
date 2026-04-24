import React from 'react';
import { motion } from 'motion/react';
import { Send, User, Building, Mail, MessageSquare, ChevronRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Mimic API delay
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-12 py-32 border-t border-white/5 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="tag mb-6 inline-block text-amber-500">Inquiry Protocol</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter text-white">
            Secure your <br/><span className="text-amber-500">Sovereign Instance.</span>
          </h2>
          <p className="text-neutral-500 leading-relaxed max-w-md mb-12">
            Speak with our engineering team about deploying Primewave on your infrastructure. We support air-gapped data centers, private clouds, and specialized hardware clusters.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-amber-500/50">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-600 block mb-1">Direct Channel</span>
                <span className="text-sm font-mono text-neutral-300">info@primewave-tech.com</span>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-amber-500/50">
                <Building size={18} />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-600 block mb-1">Global HQ</span>
                <span className="text-sm font-mono text-neutral-300">Palo Alto, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="glass p-1 rounded-xl">
            <form onSubmit={handleSubmit} className="bg-[#050505] p-8 md:p-12 rounded-lg space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" size={16} />
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-neutral-900/50 border border-white/5 rounded-lg py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 ml-1">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" size={16} />
                    <input 
                      required
                      type="email"
                      placeholder="name@company.com"
                      className="w-full bg-neutral-900/50 border border-white/5 rounded-lg py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 ml-1">Organization</label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" size={16} />
                  <input 
                    type="text" 
                    placeholder="Engineering Corp"
                    className="w-full bg-neutral-900/50 border border-white/5 rounded-lg py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 ml-1">Project Details</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-neutral-600" size={16} />
                  <textarea 
                    rows={4}
                    placeholder="Describe your spatial AI requirements..."
                    className="w-full bg-neutral-900/50 border border-white/5 rounded-lg py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all resize-none"
                  />
                </div>
              </div>

              <button 
                disabled={isSubmitted}
                className="w-full py-4 bg-white text-black font-bold uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-amber-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitted ? (
                  <>Transmission Received <Send size={14} className="animate-pulse" /></>
                ) : (
                  <>Initialize Contact Sequence <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
              
              <div className="text-center">
                <span className="text-[9px] text-neutral-600 font-mono">ENCRYPTED INPUT CHANNEL: SEC_WAVE_256</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
