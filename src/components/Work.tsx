"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type ProjectCategory = "all" | "strategy" | "design" | "community";

interface Project {
  id: number;
  titleKey: string;
  descKey: string;
  category: ProjectCategory;
  link: string;
  image: string;
  gallery: string[];
  linkTextKey: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    titleKey: "work.p1.title",
    descKey: "work.p1.desc",
    category: "strategy",
    link: "https://www.bybit.com",
    image: "/projects/bybit/1.png",
    gallery: [
      "/projects/bybit/1.png",
      "/projects/bybit/2.png",
      "/projects/bybit/3.png",
      "/projects/bybit/4.png",
      "/projects/bybit/5.png",
      "/projects/bybit/6.png",
      "/projects/bybit/7.jpeg",
      "/projects/bybit/8.png",
    ],
    linkTextKey: "work.p1.link",
    tags: ["Content Strategy", "Community Management", "Bilingual Copywriting"]
  },
  {
    id: 2,
    titleKey: "work.p2.title",
    descKey: "work.p2.desc",
    category: "strategy",
    link: "https://www.binance.com",
    image: "/projects/2.png",
    gallery: ["/projects/2.png"],
    linkTextKey: "work.p2.link",
    tags: ["Editorial Planning", "Community Growth", "Web3"]
  },
  {
    id: 3,
    titleKey: "work.p3.title",
    descKey: "work.p3.desc",
    category: "community",
    link: "https://www.facebook.com/share/1WMMUm6Cny/",
    image: "/projects/3.png",
    gallery: ["/projects/3.png"],
    linkTextKey: "work.p3.link",
    tags: ["Organic Growth", "Event Coverage", "Facebook Management"]
  },
  {
    id: 4,
    titleKey: "work.p4.title",
    descKey: "work.p4.desc",
    category: "strategy",
    link: "https://www.tiktok.com/@impact.events.bj",
    image: "/projects/impact/2.png",
    gallery: [
      "/projects/impact/2.png",
      "/projects/impact/1.png",
      "/projects/impact/3.png"
    ],
    linkTextKey: "work.p4.link",
    tags: ["Artistic Direction", "TikTok Content", "Video Editing"]
  },
  {
    id: 5,
    titleKey: "work.p5.title",
    descKey: "work.p5.desc",
    category: "design",
    link: "#",
    image: "/projects/womenedtech/3.png",
    gallery: [
      "/projects/womenedtech/3.png",
      "/projects/womenedtech/1.png",
      "/projects/womenedtech/2.png",
      "/projects/womenedtech/4.png",
      "/projects/womenedtech/5.png",
      "/projects/womenedtech/6.png",
      "/projects/womenedtech/7.png",
      "/projects/womenedtech/8.png",
      "/projects/womenedtech/9.png"
    ],
    linkTextKey: "work.p5.link",
    tags: ["Social Media Design", "NGO", "Photoshop"]
  },
  {
    id: 6,
    titleKey: "work.p6.title",
    descKey: "work.p6.desc",
    category: "design",
    link: "#",
    image: "/projects/oxfam/1.png",
    gallery: [
      "/projects/oxfam/1.png",
      "/projects/oxfam/2.png",
      "/projects/oxfam/3.png",
      "/projects/oxfam/4.png",
      "/projects/oxfam/5.png",
      "/projects/oxfam/6.png",
      "/projects/oxfam/7.png",
      "/projects/oxfam/8.png",
      "/projects/oxfam/9.png",
      "/projects/oxfam/10.png"
    ],
    linkTextKey: "work.p6.link",
    tags: ["Campaign Visuals", "Misinformation Debunking", "Illustrator"]
  },
  {
    id: 7,
    titleKey: "work.p7.title",
    descKey: "work.p7.desc",
    category: "design",
    link: "#",
    image: "/projects/core-yaourt/2.png",
    gallery: [
      "/projects/core-yaourt/2.png",
      "/projects/core-yaourt/1.png",
      "/projects/core-yaourt/3.png",
      "/projects/core-yaourt/4.png",
      "/projects/core-yaourt/5.png",
      "/projects/core-yaourt/6.png"
    ],
    linkTextKey: "work.p7.link",
    tags: ["Logo Design", "Packaging", "Product Labels"]
  },
];

export default function Work() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === selectedProject.gallery.length - 1 ? 0 : prev + 1));
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.gallery.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="work" className="py-24 relative bg-bg-color overflow-hidden">
      {/* Grainy Texture */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Peintre-style background animations (All Blue) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[130px]"
          animate={{ 
            x: [0, 150, -80, 0], 
            y: [0, -120, 80, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-0 right-[-5%] w-[450px] h-[450px] bg-blue-400/10 rounded-full blur-[110px]"
          animate={{ 
            x: [0, -150, 100, 0], 
            y: [0, 100, -150, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">
              {t("work.subtitle")}
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-foreground tracking-tighter">
              {t("work.title")}
            </h2>
          </motion.div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3"
          >
            {(["all", "strategy", "design", "community"] as const).map((cat, idx) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border ${
                  filter === cat
                    ? "bg-blue-600 text-white border-blue-600 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] scale-105"
                    : "bg-foreground/[0.02] border-border-color hover:border-blue-500/30 text-foreground/70"
                }`}
              >
                {t(`work.filter.${cat}`)}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="group relative rounded-[2.5rem] overflow-hidden glass-card transition-all duration-500 hover:translate-y-[-12px] h-[500px] border border-border-color"
              >
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={project.image} 
                    alt={t(project.titleKey)} 
                    fill 
                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-110" 
                  />
                </div>
                
                {/* Zoom Overlay */}
                <motion.div 
                  className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer bg-black/50 p-3 rounded-full hover:bg-blue-600 hover:scale-110 backdrop-blur-sm"
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <ZoomIn className="w-5 h-5 text-white" />
                </motion.div>

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />
                
                <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end z-20 pointer-events-none">
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4 sm:mb-6 pointer-events-auto"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[8px] font-black uppercase tracking-widest text-blue-100 bg-blue-600/30 px-2 py-1 rounded-md border border-blue-600/30">
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                  
                  <h3 className="text-2xl font-display font-black mb-3 sm:mb-4 text-white leading-tight group-hover:text-blue-400 transition-colors duration-300 pointer-events-auto">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 sm:mb-8 line-clamp-3 font-medium pointer-events-auto">
                    {t(project.descKey)}
                  </p>
                  
                  {project.link !== "#" ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white border-b-2 border-blue-500 pb-1 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 w-fit pointer-events-auto"
                    >
                      {t(project.linkTextKey)}
                    </motion.a>
                  ) : (
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 cursor-default pointer-events-auto">
                      {t(project.linkTextKey)}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-xl"
            >
              <motion.div 
                className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-[60]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="text-white">
                  <h3 className="text-xl font-display font-black">{t(selectedProject.titleKey)}</h3>
                  <p className="text-white/50 text-sm">{currentImageIndex + 1} / {selectedProject.gallery.length}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(null);
                  }}
                  className="bg-white/10 p-3 rounded-full hover:bg-red-500 hover:scale-110 transition-all duration-300 text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
              
              <div className="relative w-full max-w-7xl h-[70vh] flex items-center justify-center mt-12" onClick={(e) => e.stopPropagation()}>
                {selectedProject.gallery.length > 1 && (
                  <>
                    <motion.button 
                      onClick={handlePrev}
                      whileHover={{ scale: 1.1, x: -5 }}
                      className="absolute left-0 z-10 p-4 bg-black/50 hover:bg-blue-600 text-white rounded-full backdrop-blur-md transition-all duration-300 -translate-x-2 md:-translate-x-8"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </motion.button>

                    <motion.button 
                      onClick={handleNext}
                      whileHover={{ scale: 1.1, x: 5 }}
                      className="absolute right-0 z-10 p-4 bg-black/50 hover:bg-blue-600 text-white rounded-full backdrop-blur-md transition-all duration-300 translate-x-2 md:translate-x-8"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </motion.button>
                  </>
                )}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 1.05, x: -20 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src={selectedProject.gallery[currentImageIndex]}
                      alt={`${t(selectedProject.titleKey)} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                      quality={100}
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {selectedProject.gallery.length > 1 && (
                <motion.div 
                  className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 px-4 overflow-x-auto pb-4" 
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {selectedProject.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                        idx === currentImageIndex 
                          ? "ring-2 ring-blue-600 scale-110 opacity-100" 
                          : "opacity-40 hover:opacity-100"
                      }`}
                    >
                      <Image 
                        src={img} 
                        alt={`Thumbnail ${idx + 1}`} 
                        fill 
                        className="object-cover"
                        sizes="64px"
                      />
                    </button>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
