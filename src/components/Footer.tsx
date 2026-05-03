"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa";

export default function Footer() {
  const { t } = useLanguage();

  const socials = [
    { name: "LinkedIn", icon: <FaLinkedin size={18} />, href: "https://linkedin.com/in/olorisegun-yessoufou" },
    { name: "Twitter", icon: <FaTwitter size={18} />, href: "https://twitter.com/Yolorisegun" },
    { name: "Telegram", icon: <FaTelegram size={18} />, href: "https://t.me/Yolorisegun" },
    { name: "Instagram", icon: <FaInstagram size={18} />, href: "https://instagram.com/Yolorisegun" },
    { name: "WhatsApp", icon: <FaWhatsapp size={18} />, href: "https://wa.me/2290196078613" },
  ];

  return (
    <footer className="relative bg-[#080E16] border-t border-white/5 pt-12 md:pt-16 pb-6 md:pb-8 overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-600/5 rounded-full blur-[80px] md:blur-[100px]"
          animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 lg:gap-8 mb-12 md:mb-16">
          
          {/* Brand & Bio */}
          <div className="space-y-6 sm:col-span-1">
            <h2 className="text-xl md:text-2xl font-display font-black tracking-tighter text-white">
              CHERI<span className="text-blue-600">F</span>
            </h2>
            <p className="text-white/35 text-[0.8rem] md:text-[0.85rem] leading-[1.8] md:leading-[1.9] max-w-[280px] font-medium">
              Stratège créatif et créateur de contenu spécialisé dans le Web3.
            </p>
            <div className="flex gap-4">
              {socials.slice(0, 3).map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: '#2563eb' }}
                  className="text-white/25 hover:text-blue-600 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Expertises */}
          <div className="space-y-6">
            <h4 className="text-[0.7rem] font-black uppercase tracking-[0.18em] text-white/35">Expertises</h4>
            <ul className="space-y-3">
              {["Stratégie Web3", "Content Creation", "Social Media", "UI/UX Design"].map((item) => (
                <li key={item}>
                  <a href="#work" className="text-[0.8rem] md:text-[0.85rem] font-medium text-white/45 hover:text-blue-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-6">
            <h4 className="text-[0.7rem] font-black uppercase tracking-[0.18em] text-white/35">Navigation</h4>
            <ul className="space-y-3">
              {["Projets", "À Propos", "Contact", "News"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-[0.8rem] md:text-[0.85rem] font-medium text-white/45 hover:text-blue-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h4 className="text-[0.7rem] font-black uppercase tracking-[0.18em] text-white/35">Contact</h4>
            <div className="space-y-3 text-[0.8rem] md:text-[0.85rem] font-medium text-white/45">
              <a href="tel:+2290196078613" className="hover:text-blue-600 transition-colors block text-white/35">+229 01 96 07 86 13</a>
              <a href="mailto:mr.riifols@gmail.com" className="hover:text-blue-600 transition-colors block lowercase text-white/35 break-words">mr.riifols@gmail.com</a>
              <p className="text-white/35">Benin Republic · <span className="text-blue-600">Remote & International</span></p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-[0.7rem] md:text-[0.75rem] font-bold text-white/25 text-center md:text-left">
          <p>© {new Date().getFullYear()} CHERIF — TOUS DROITS RÉSERVÉS.</p>
          <p className="flex items-center gap-2 tracking-[0.05em]">
            BENIN REPUBLIC <span className="text-blue-600">·</span> REMOTE & INTERNATIONAL
          </p>
        </div>
      </div>
    </footer>
  );
}
