"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { 
  PenTool, 
  Layout, 
  MessageSquare, 
  Image as ImageIcon, 
  Code2, 
  Globe, 
  Cpu, 
  Palette 
} from "lucide-react";
import { SiFigma } from "react-icons/si";

export default function About() {
  const { t } = useLanguage();

  const skills = [
    { icon: <Code2 className="w-6 h-6" />, name: "Content Strategy" },
    { icon: <SiFigma className="w-6 h-6" />, name: "Figma" },
    { icon: <Palette className="w-6 h-6" />, name: "Graphic Design" },
    { icon: <ImageIcon className="w-6 h-6" />, name: "Visual Arts" },
    { icon: <MessageSquare className="w-6 h-6" />, name: "Community Management" },
    { icon: <Globe className="w-6 h-6" />, name: "Web3/Blockchain" },
    { icon: <Layout className="w-6 h-6" />, name: "UI Design" },
    { icon: <Cpu className="w-6 h-6" />, name: "AI Content Creation" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-bg-color relative overflow-hidden">
      {/* Grainy Texture */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Peintre-style background animations (All Blue) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[130px]"
          animate={{ 
            x: [0, -100, 60, 0], 
            y: [0, 120, -80, 0],
            scale: [1, 1.15, 0.9, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] bg-blue-400/10 rounded-full blur-[110px]"
          animate={{ 
            x: [0, 80, -60, 0], 
            y: [0, -100, 60, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block"
            >
              {t("about.subtitle")}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-black mb-8 text-foreground tracking-tighter leading-[1.1]"
            >
              {t("about.title")}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-foreground/70 mb-8 leading-relaxed font-medium"
            >
              {t("about.bio")}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 rounded-[2.5rem] relative group border border-border-color shadow-2xl"
          >
            <div className="absolute inset-0 bg-blue-600/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-xl font-display font-black mb-10 text-foreground uppercase tracking-widest text-center relative z-10">
              {t("about.skills.title")}
            </h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, backgroundColor: 'rgba(37, 99, 235, 0.08)' }}
                  className="flex flex-col items-center gap-3 p-4 bg-foreground/[0.02] rounded-2xl border border-border-color hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="text-blue-600 transition-transform duration-300 group-hover:scale-110">{skill.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-foreground/50 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
