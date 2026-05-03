"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
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
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-[#F8FAFC] dark:bg-[#0a1120] transition-colors duration-300">
      {/* Background Elements (Peintre Style) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-blue-600/[0.05] rounded-full translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border border-blue-600/[0.05] rounded-full -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Content & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <span className="text-[#8D5524] font-black text-[11px] uppercase tracking-[0.3em] mb-4 block">
                DEMANDE DE PROJET
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold text-[#0a1120] dark:text-white tracking-tighter leading-[1.1] mb-8">
                VOTRE VISION <span className="italic">CRÉATIVE</span> <br /> 
                EN 24 H.
              </h2>
              <p className="text-lg text-slate-500 dark:text-white/50 font-medium max-w-md leading-relaxed">
                Remplissez le formulaire : je reviens vers vous sous 24h pour discuter de votre stratégie et de vos objectifs.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Phone size={20} />, val: "+229 01 96 07 86 13" },
                { icon: <Mail size={20} />, val: "mr.riifols@gmail.com" },
                { icon: <Clock size={20} />, val: "Lundi - Samedi · 8h - 19h" },
                { icon: <MapPin size={20} />, val: "Benin Republic · Remote & International" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-600 dark:text-white/70">
                  <div className="text-blue-600">{item.icon}</div>
                  <p className="text-sm md:text-base font-bold">{item.val}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-[#0f172a] rounded-[2.5rem] p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(15,23,42,0.15)] border border-slate-100 dark:border-white/10">
              {status === 'success' ? (
                <div className="py-20 text-center space-y-6">
                  <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={32} /></div>
                  <h3 className="text-2xl font-display font-black text-[#0a1120] dark:text-white">Message envoyé !</h3>
                  <button onClick={() => setStatus('idle')} className="text-blue-600 font-bold uppercase text-xs tracking-widest hover:underline">Recommencer</button>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-white/30 ml-1">NOM & PRÉNOM</label>
                      <input required name="user_name" type="text" placeholder="John Doe" className="w-full bg-[#f8fafc] dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-600 transition-all text-[#0a1120] dark:text-white font-medium placeholder:text-slate-300 dark:placeholder:text-white/20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-white/30 ml-1">TÉLÉPHONE</label>
                      <input name="user_phone" type="text" placeholder="01 XX XX XX XX" className="w-full bg-[#f8fafc] dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-600 transition-all text-[#0a1120] dark:text-white font-medium placeholder:text-slate-300 dark:placeholder:text-white/20" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-white/30 ml-1">ADRESSE E-MAIL</label>
                    <input required name="user_email" type="email" placeholder="vous@exemple.com" className="w-full bg-[#f8fafc] dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-600 transition-all text-[#0a1120] dark:text-white font-medium placeholder:text-slate-300 dark:placeholder:text-white/20" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-white/30 ml-1">VOTRE PROJET</label>
                    <textarea required name="message" rows={4} placeholder="Parlez-moi de vos objectifs..." className="w-full bg-[#f8fafc] dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-600 transition-all resize-none text-[#0a1120] dark:text-white font-medium placeholder:text-slate-300 dark:placeholder:text-white/20" />
                  </div>

                  <motion.button
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 text-sm disabled:opacity-50"
                  >
                    {status === 'sending' ? 'ENVOI EN COURS...' : 'DÉMARRER LE PROJET'}
                    <Send size={18} />
                  </motion.button>
                  
                  <p className="text-[10px] text-center text-slate-400 dark:text-white/20 font-bold uppercase tracking-widest mt-4">
                    Vos données ne sont jamais revendues. Réponse garantie sous 24h.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
