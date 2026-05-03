"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-[100vh] lg:min-h-screen flex flex-col justify-center overflow-hidden pt-28 lg:pt-20 bg-bg-color transition-colors duration-300">
      {/* Grainy Texture */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side (Content) */}
        <div className="lg:col-span-7 z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-8 lg:w-12 h-[1px] bg-[#8D5524]"></span>
              <span className="text-[#8D5524] font-black text-[10px] lg:text-xs uppercase tracking-[0.3em]">
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1 
              className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[0.9] tracking-tighter text-foreground mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9 }}
            >
              OLORISEGUN <br />
              <span className="text-blue-600 italic uppercase">YESSOUFOU</span>
            </motion.h1>

            {/* Mobile/Tablet Photo (Balanced size) */}
            <motion.div 
              className="lg:hidden relative w-full max-w-[400px] aspect-[4/5] mx-auto rounded-[2rem] overflow-hidden mb-10 shadow-2xl border border-border-color"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Image
                src="/cherif_image.png"
                alt="Cherif"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </motion.div>

            <motion.p 
              className="text-foreground/40 text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {t("hero.role")}
            </motion.p>

            <motion.p 
              className="max-w-2xl mx-auto lg:mx-0 text-base lg:text-xl text-foreground/60 leading-relaxed mb-10 font-medium px-4 lg:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {t("hero.tagline")}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#work"
                className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-3 bg-[#8D5524] text-white px-10 py-5 rounded-full font-black transition-all hover:bg-[#a66a35] hover:shadow-xl hover:shadow-[#8D5524]/20"
              >
                {t("hero.cta.work")}
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>

              <div className="flex gap-5">
                {[
                  { icon: <FaLinkedinIn size={18} />, href: "https://linkedin.com/in/olorisegun-yessoufou" },
                  { icon: <FaWhatsapp size={18} />, href: "https://wa.me/2290196078613" },
                  { icon: <FaTelegramPlane size={18} />, href: "https://t.me/Yolorisegun" },
                  { icon: <FaInstagram size={18} />, href: "https://instagram.com/Yolorisegun" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, backgroundColor: '#8D5524', color: '#fff', borderColor: '#8D5524' }}
                    className="p-3.5 rounded-full border border-border-color transition-all flex items-center justify-center text-foreground/40"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Photo (Hidden on mobile/tablet) */}
        <div className="hidden lg:flex lg:col-span-5 relative justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative w-full max-w-[380px]"
          >
            <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border border-border-color">
              <Image
                src="/cherif_image.png"
                alt="Cherif"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-1000"
                sizes="380px"
              />
            </div>
            <motion.div 
              className="absolute -bottom-8 -left-8 glass-card p-8 rounded-3xl border border-[#8D5524]/20 shadow-2xl"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: 'spring' }}
            >
              <p className="text-4xl font-display font-black text-[#8D5524] mb-1">7K+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30 leading-none">Reach Content</p>
            </motion.div>
          </motion.div>
        </div>

      </div>

      <motion.div 
        className="absolute bottom-10 left-10 text-[8rem] font-display font-black text-foreground/[0.03] select-none pointer-events-none whitespace-nowrap hidden lg:block uppercase tracking-tighter"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        CHERIF YESSOUFOU
      </motion.div>
    </section>
  );
}
