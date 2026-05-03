"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "Bybit Africa",
      role: "Content Strategist & Ambassador",
      period: "2023 - Present",
      description: "Driving Web3 adoption through bilingual content and community growth across French-speaking Africa."
    },
    {
      company: "Binance",
      role: "Key Opinion Leader (KOL)",
      period: "2022 - Present",
      description: "Simplifying complex blockchain concepts for a diverse West African audience."
    },
    {
      company: "Impact Events",
      role: "Creative Director",
      period: "2021 - Present",
      description: "Leading visual identity and social media growth for major regional events."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-bg-color relative overflow-hidden">
      {/* Grainy Texture */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Peintre-style background animations (All Blue) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute top-[20%] left-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[130px]"
          animate={{ 
            x: [0, 120, -60, 0], 
            y: [0, 100, -140, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-[0%] w-[450px] h-[450px] bg-blue-800/20 rounded-full blur-[110px]"
          animate={{ 
            x: [0, -100, 140, 0], 
            y: [0, -120, 60, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">
            {t("experience.subtitle")}
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground tracking-tighter">
            {t("experience.title")}
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="glass-card p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-blue-500/30 transition-all duration-500 border border-border-color bg-foreground/[0.02]"
            >
              <div>
                <h3 className="text-2xl font-display font-black text-foreground group-hover:text-blue-500 transition-colors">
                  {exp.company}
                </h3>
                <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mt-1">
                  {exp.role}
                </p>
              </div>
              <div className="md:text-right">
                <span className="text-foreground/40 font-black text-sm uppercase tracking-widest block mb-2">
                  {exp.period}
                </span>
                <p className="text-foreground/60 max-w-md font-medium text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
