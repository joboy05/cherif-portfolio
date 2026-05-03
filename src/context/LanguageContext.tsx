"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    "nav.work": "PROJETS",
    "nav.about": "À PROPOS",
    "nav.contact": "CONTACT",
    "hero.badge": "STRATÈGE DE CONTENU BILINGUE",
    "hero.role": "Graphic Designer · Content Creator · Web3 Ambassador",
    "hero.tagline": "Je crée des identités visuelles fortes et du contenu stratégique qui font bouger les communautés. Basé au Bénin — je travaille à l'échelle mondiale. Bilingue FR / EN.",
    "hero.cta.work": "Voir mon travail →",
    "hero.cta.contact": "Me contacter",
    "about.title": "Créativité et stratégie au service de votre croissance",
    "about.subtitle": "MON HISTOIRE",
    "about.bio": "Je crée des stratégies de contenu et des récits visuels percutants qui stimulent l'engagement sur les plateformes numériques. Bilingue FR / EN, basé au Bénin. De la planification de contenu à l'exécution visuelle — je fais le pont entre la créativité et la stratégie pour bâtir des communautés engagées et des identités de marque fortes.",
    "about.skills.title": "Expertises & Outils",
    "work.title": "Featured Work",
    "work.subtitle": "PORTFOLIO DE CONTENU & CAMPAGNES",
    "work.filter.all": "TOUT",
    "work.filter.strategy": "STRATÉGIE",
    "work.filter.design": "DESIGN",
    "work.filter.community": "COMMUNAUTÉ",
    "work.p1.title": "Bybit Africa (Web3)",
    "work.p1.desc": "Développement et exécution d'une stratégie de contenu bilingue pour faire croître la communauté étudiante de Bybit à travers l'Afrique francophone.",
    "work.p1.link": "Voir Bybit →",
    "work.p2.title": "Binance KOL Program",
    "work.p2.desc": "En tant que Leader d'Opinion Clé, création de contenu éducatif bilingue simplifiant les concepts complexes de la blockchain pour le public ouest-africain.",
    "work.p2.link": "Voir Binance →",
    "work.p3.title": "Miss Inter Université",
    "work.p3.desc": "Création et gestion de la page Facebook de Miss Inter Université à partir de zéro sur 2 éditions consécutives. Communauté de près de 7 000 abonnés réels.",
    "work.p3.link": "Voir la Page Facebook →",
    "work.p4.title": "Impact Events — Kobourou's Grove",
    "work.p4.desc": "Responsable de toute la chaîne créative : montage vidéo, affiches, flyers, badges et goodies. Contenu ayant atteint des milliers de vues organiquement sur TikTok.",
    "work.p4.link": "Voir la Page TikTok →",
    "work.p5.title": "WomenEdtech / GIZ",
    "work.p5.desc": "Création de visuels pour les réseaux sociaux d'une ONG axée sur l'éducation numérique. Conception de flyers pour #eSkills4Girls en partenariat avec la GIZ.",
    "work.p5.link": "Communication ONG →",
    "work.p6.title": "Campagne Oxfam COVID-19",
    "work.p6.desc": "Conception d'une campagne complète sur les réseaux sociaux pour une initiative de sensibilisation au COVID-19 financée par Affaires mondiales Canada.",
    "work.p6.link": "Visuels de Campagne →",
    "work.p7.title": "Identité Coré Yaourt",
    "work.p7.desc": "Conception complète de l'identité de marque pour Coré Yaourt : logo, déclinaisons saisonnières, étiquettes de produits et visuels promotionnels.",
    "work.p7.link": "Identité de Marque →",
    "experience.title": "Parcours Professionnel",
    "experience.subtitle": "EXPÉRIENCE",
    "newsletter.title": "Restez à l'affût",
    "newsletter.subtitle": "Inscrivez-vous pour recevoir mes dernières analyses sur le Web3, le design et la stratégie de contenu.",
    "newsletter.placeholder": "votre@email.com",
    "newsletter.button": "S'abonner",
    "contact.title": "Construisons quelque chose d'audacieux.",
    "contact.subtitle": "Ouvert aux opportunités · Basé au Bénin · Bilingue FR/EN",
    "contact.form.name": "Votre Nom",
    "contact.form.email": "Votre Email",
    "contact.form.message": "Votre Message",
    "contact.form.submit": "Envoyer le message",
    "footer.rights": "Tous droits réservés.",
    "footer.quicklinks": "Liens Rapides",
    "footer.social": "Réseaux Sociaux"
  },
  en: {
    "nav.work": "WORK",
    "nav.about": "ABOUT",
    "nav.contact": "CONTACT",
    "hero.badge": "BILINGUAL CONTENT STRATEGIST",
    "hero.role": "Graphic Designer · Content Creator · Web3 Ambassador",
    "hero.tagline": "Crafting bold visual identities and strategic content that moves communities. Based in Benin Republic — working globally. Bilingual FR / EN.",
    "hero.cta.work": "View my work →",
    "hero.cta.contact": "Get in touch",
    "about.title": "Creativity and strategy for your growth",
    "about.subtitle": "MY STORY",
    "about.bio": "I create strategic content and compelling visual narratives that drive engagement across digital platforms. Bilingual FR / EN, based in Benin Republic. From content planning to visual execution — I bridge creativity and strategy to grow communities and brands.",
    "about.skills.title": "Expertise & Tools",
    "work.title": "Featured Work",
    "work.subtitle": "CONTENT & CAMPAIGN PORTFOLIO",
    "work.filter.all": "ALL",
    "work.filter.strategy": "STRATEGY",
    "work.filter.design": "DESIGN",
    "work.filter.community": "COMMUNITY",
    "work.p1.title": "Bybit Africa (Web3)",
    "work.p1.desc": "Developing and executing a bilingual content strategy to grow Bybit's student community across francophone Africa.",
    "work.p1.link": "View Bybit →",
    "work.p2.title": "Binance KOL Program",
    "work.p2.desc": "As a Key Opinion Leader, crafting bilingual educational content simplifying complex blockchain concepts for West African audiences.",
    "work.p2.link": "View Binance →",
    "work.p3.title": "Miss Inter Université",
    "work.p3.desc": "Built and managed the Facebook page for Miss Inter Université from scratch over 2 consecutive editions. Grew community to nearly 7,000 real followers.",
    "work.p3.link": "View Facebook Page →",
    "work.p4.title": "Impact Events — Kobourou's Grove",
    "work.p4.desc": "Responsible for the full creative pipeline: video editing, posters, flyers, badges, and goodies. Content reached thousands of views organically on TikTok.",
    "work.p4.link": "View TikTok Page →",
    "work.p5.title": "WomenEdtech / GIZ",
    "work.p5.desc": "Created social media visuals for NGO focused on digital education. Designed flyers for #eSkills4Girls in partnership with GIZ.",
    "work.p5.link": "NGO Communication →",
    "work.p6.title": "Oxfam COVID-19 Campaign",
    "work.p6.desc": "Designed a full social media campaign for a COVID-19 awareness initiative funded by Global Affairs Canada, in collaboration with Oxfam.",
    "work.p6.link": "Campaign Visuals →",
    "work.p7.title": "Coré Yaourt Identity",
    "work.p7.desc": "Full brand identity design for Coré Yaourt: logo, seasonal variations, product labels, and promotional visuals.",
    "work.p7.link": "Brand Identity →",
    "experience.title": "Professional Journey",
    "experience.subtitle": "EXPERIENCE",
    "newsletter.title": "Stay in the loop",
    "newsletter.subtitle": "Subscribe to get my latest insights on Web3, design, and content strategy.",
    "newsletter.placeholder": "your@email.com",
    "newsletter.button": "Subscribe",
    "contact.title": "Let's build something bold.",
    "contact.subtitle": "Open to content strategy roles · Based in Benin Republic · Bilingual FR/EN",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Message",
    "footer.rights": "All rights reserved.",
    "footer.quicklinks": "Quick Links",
    "footer.social": "Social Media"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-lang") as Language;
    if (savedLang === "fr" || savedLang === "en") {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "fr" ? "en" : "fr";
    setLanguage(newLang);
    localStorage.setItem("portfolio-lang", newLang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
