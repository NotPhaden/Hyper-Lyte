const translations = {

  ro: {
    nav_home: "Home",
    nav_services: "Servicii",
    nav_portfolio: "Portofoliu",
    nav_contact: "Contact",

    badge: "✨ DIGITAL STUDIO PREMIUM",
    hero_title_end: "CARE VÂND",

    subtitle: "Website-uri premium pentru creatori, artiști și branduri online.",
    description: "Construim experiențe digitale moderne care transformă vizitatorii în comunități și clienți.",

    discord_sub: "Intră în comunitate",

    services_title: "Serviciile noastre",
    service1: "Site-uri moderne și rapide",
    service2: "Site muzical personalizat",
    service3: "Servere Discord profesionale",
    service4: "Bannere și overlay-uri",

    portfolio_title: "Portofoliu",

    p1_title: "PROJECT TIKTOK LINK CUSTOM",
    p1_desc: "Website pentru creator de conținut gaming.",

    p2_title: "PROJECT SHOP CUSTOM",
    p2_desc: "Magazin online pentru lumânări handmade premium, create pentru evenimente speciale și decor elegant.",

    p3_title: "B-ZONE STREAM SYSTEM",
    p3_desc: "Platformă de streaming audio tip radio online cu player live, automatizare muzică și integrare Discord pentru comunități.",

    contact_title: "Contact",
    contact_text: "Intră pe Discord pentru suport și colaborări.",

    footer: "© 2026 HYPER LYTE"
  },

  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",

    badge: "✨ PREMIUM DIGITAL STUDIO",
    hero_title_end: "THAT SELL",

    subtitle: "Premium websites for creators, artists and online brands.",
    description: "We build modern digital experiences that turn visitors into customers.",

    discord_sub: "Join community",

    services_title: "Our Services",
    service1: "Modern fast websites",
    service2: "Custom music website",
    service3: "Professional Discord servers",
    service4: "Banners and overlays",

    portfolio_title: "Portfolio",

    p1_title: "CUSTOM TIKTOK LINK PROJECT",
    p1_desc: "Website for a gaming content creator.",

    p2_title: "CUSTOM ONLINE SHOP PROJECT",
    p2_desc: "Premium handmade candle online shop created for special events and elegant decor.",

    p3_title: "B-ZONE STREAM SYSTEM",
    p3_desc: "Online radio streaming platform with live player, music automation and Discord integration.",

    contact_title: "Contact",
    contact_text: "Join Discord for support and collaborations.",

    footer: "© 2026 HYPER LYTE"
  }
};

function setLang(lang){
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

window.addEventListener("load", () => {
  setLang(localStorage.getItem("lang") || "ro");
});
