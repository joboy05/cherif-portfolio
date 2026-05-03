"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 lg:pt-20 bg-bg-color">
      {/* Grainy Texture Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Background Animation Blobs (All Blue Tones) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          className="absolute top-[5%] left-[0%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px]"
          animate={{ 
            x: [0, 100, -50, 0], 
            y: [0, -80, 50, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[20%] right-[5%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px]"
          animate={{ 
            x: [0, -150, 100, 0], 
            y: [0, 120, -100, 0],
            scale: [1, 0.8, 1.1, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Side (Content) */}
        <div className="md:col-span-7 lg:col-span-7 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-12 h-[1px] bg-[#8D5524]"></span>
              <span className="text-[#8D5524] font-black text-xs uppercase tracking-[0.3em]">
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[0.95] tracking-tighter text-foreground mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9 }}
            >
              OLORISEGUN <br />
              <span className="text-blue-600 italic uppercase">YESSOUFOU</span>
            </motion.h1>

            {/* Mobile Photo (Large Portrait) */}
            <motion.div 
              className="md:hidden relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-10 border border-border-color shadow-2xl"
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
              />
            </motion.div>

            <motion.p 
              className="text-foreground/40 text-sm md:text-base font-bold uppercase tracking-widest mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {t("hero.role")}
            </motion.p>

            <motion.p 
              className="max-w-2xl text-lg md:text-xl text-foreground/70 leading-relaxed mb-10 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {t("hero.tagline")}
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-6 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#work"
                className="group relative inline-flex items-center gap-3 bg-[#8D5524] text-white px-8 py-4 rounded-full font-black transition-all hover:bg-[#a66a35] hover:shadow-xl hover:shadow-[#8D5524]/20 hover:pr-10"
              >
                {t("hero.cta.work")}
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
              </a>

              <div className="flex gap-4">
                {[
                  { icon: <FaLinkedinIn size={18} />, href: "https://linkedin.com/in/olorisegun-yessoufou", label: "LinkedIn" },
                  { icon: <FaWhatsapp size={18} />, href: "https://wa.me/2290196078613", label: "WhatsApp" },
                  { icon: <FaTelegramPlane size={18} />, href: "https://t.me/Yolorisegun", label: "Telegram" },
                  { icon: <FaInstagram size={18} />, href: "https://instagram.com/Yolorisegun", label: "Instagram" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, backgroundColor: '#8D5524', color: '#fff', borderColor: '#8D5524' }}
                    className="p-3 rounded-full border border-border-color hover:border-[#8D5524] transition-all duration-300 flex items-center justify-center text-foreground/70"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Photo Container */}
        <div className="hidden md:flex md:col-span-5 lg:col-span-5 relative justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative w-full max-w-[320px]"
          >
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border border-border-color">
              <Image
                src="/cherif_image.png"
                alt="Cherif"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <motion.div 
              className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl border border-[#8D5524]/20 shadow-xl"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: 'spring' }}
            >
              <p className="text-3xl font-display font-black text-[#8D5524] mb-1">7K+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 leading-none">Reach Content</p>
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
