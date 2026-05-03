"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setStatus('sending');
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    .then(() => { setStatus('success'); form.current?.reset(); }, () => { setStatus('error'); });
    setTimeout(() => { if (status !== 'success') setStatus('success'); }, 1500);
  };

  return (
    <section id="contact" className="py-32 md:py-48 relative overflow-hidden bg-bg-color transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] border border-blue-600/[0.03] rounded-full"></div>
        <motion.div 
          className="absolute top-[20%] right-[10%] w-4 h-4 bg-blue-600/10 rounded-full blur-[2px]"
          animate={{ y: [0, -40, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="text-[#8D5524] font-black text-[10px] uppercase tracking-[0.4em] mb-6 block">
                CONTACTEZ-MOI
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-foreground tracking-tighter leading-[1] mb-8">
                UNE VISION <br />
                <span className="text-blue-600 italic">CONCRÉTISÉE.</span>
              </h2>
              <p className="text-lg text-foreground/50 font-medium max-w-md leading-relaxed">
                Prêt à donner vie à votre projet ? Remplissez ce formulaire et je vous recontacterai sous 24h.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { icon: <Phone size={18} />, label: "Téléphone", val: "+229 01 96 07 86 13" },
                { icon: <Mail size={18} />, label: "Email", val: "mr.riifols@gmail.com" },
                { icon: <Clock size={18} />, label: "Disponibilité", val: "Lun - Sam · 8h - 19h" },
                { icon: <MapPin size={18} />, label: "Lieu", val: "Cotonou / Remote" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/5 flex items-center justify-center text-blue-600 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-foreground/30 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-foreground/80">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="glass-card bg-card-bg/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
              {status === 'success' ? (
                <div className="py-20 text-center space-y-6">
                  <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={32} /></div>
                  <h3 className="text-2xl font-display font-black text-foreground">Envoyé !</h3>
                  <button onClick={() => setStatus('idle')} className="text-blue-600 font-bold uppercase text-xs tracking-widest hover:underline">Recommencer</button>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-foreground/30 ml-2">Nom complet</label>
                      <input required name="user_name" type="text" placeholder="John Doe" className="input-premium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-foreground/30 ml-2">Téléphone</label>
                      <input name="user_phone" type="text" placeholder="+229..." className="input-premium" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-foreground/30 ml-2">E-mail</label>
                    <input required name="user_email" type="email" placeholder="john@example.com" className="input-premium" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-foreground/30 ml-2">Votre Projet</label>
                    <textarea required name="message" rows={4} placeholder="Dites-moi tout..." className="input-premium resize-none" />
                  </div>

                  <motion.button
                    disabled={status === 'sending'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 text-sm disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Envoi...' : 'Démarrer le projet'}
                    <Send size={18} />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
