"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Send, Sparkles, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden bg-bg-color">
      {/* Grainy Texture */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#0a0f1e] rounded-[2rem] md:rounded-[3rem] p-6 sm:p-12 md:p-24 overflow-hidden text-center border border-blue-500/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]"
        >
          {/* Background Animated Blobs */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <motion.div 
              className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <div className="relative z-10">
            <motion.h2 
              className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-white italic uppercase tracking-tighter leading-[0.9] mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              PRÊT À BOOSTER <br />
              VOTRE <span className="text-blue-600">STRATÉGIE ?</span>
            </motion.h2>

            <motion.p 
              className="text-white/60 text-base md:text-xl font-medium max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed px-4 md:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Rejoignez le cercle des créateurs qui reçoivent mes analyses Web3 et Design directement dans leur boîte mail.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 md:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative w-full max-w-md">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 md:py-5 focus:outline-none focus:border-blue-600 transition-all text-white font-medium placeholder:text-white/20"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#8D5524] text-white font-black uppercase tracking-[0.2em] px-10 py-4 md:py-5 rounded-xl md:rounded-2xl flex items-center justify-center gap-3 hover:bg-[#a66a35] transition-all shadow-xl shadow-[#8D5524]/20 whitespace-nowrap"
              >
                S'abonner <Send size={18} />
              </motion.button>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10 md:mt-12 px-4">
              <div className="flex items-center gap-2 text-white/40 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                <Sparkles size={14} className="text-blue-600" />
                SANS ENGAGEMENT
              </div>
              <div className="flex items-center gap-2 text-white/40 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                <CheckCircle2 size={14} className="text-blue-600" />
                CONTENU EXCLUSIF
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
