"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#work", label: t("nav.work") },
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "py-4 bg-bg-color/80 backdrop-blur-xl border-b border-border-color shadow-lg" 
        : "py-6 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="font-display font-black text-2xl tracking-tighter text-foreground">
              CHERI<span className="text-blue-600">F</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/50 hover:text-blue-600 transition-all text-[10px] uppercase tracking-[0.2em] font-black"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 pl-8 border-l border-border-color">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-foreground/40 hover:text-blue-600 transition-all text-[10px] font-black uppercase tracking-widest"
              >
                <Globe size={14} />
                <span>{language === "fr" ? "EN" : "FR"}</span>
              </button>
              
              <button
                onClick={toggleTheme}
                className="p-2.5 text-foreground/40 hover:text-blue-600 transition-all rounded-full hover:bg-blue-600/5"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-foreground/50"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-bg-color border-b border-border-color shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-10 space-y-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-display font-black text-foreground hover:text-blue-600 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-6 border-t border-border-color flex justify-between items-center">
                <button onClick={toggleLanguage} className="font-black text-xs uppercase tracking-widest text-foreground/50">
                  Language: {language === "fr" ? "English" : "Français"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
