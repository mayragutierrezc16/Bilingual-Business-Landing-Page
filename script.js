const translations = {
    en: {
      navHome: "Home",
      navServices: "Services",
      navProjects: "Projects",
      navTestimonials: "Testimonials",
      navContact: "Contact",
      heroTitle: "We build stunning digital experiences",
      heroSubtitle: "Design. Development. Results.",
      heroCTA: "Let’s work together",
      servicesTitle: "Our Services",
      service1Title: "UX/UI Design",
      service1Desc: "Intuitive and beautiful interfaces.",
      service2Title: "Web Development",
      service2Desc: "Fast, secure, and responsive websites.",
      service3Title: "Branding",
      service3Desc: "Your brand with personality and consistency.",
      projectsTitle: "Featured Projects",
      testimonial1: "A professional, creative, and highly efficient team.",
      testimonial2: "They exceeded our expectations every step of the way.",
      contactTitle: "Contact",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      contactButton: "Send",
    },
    es: {
      navHome: "Inicio",
      navServices: "Servicios",
      navProjects: "Proyectos",
      navTestimonials: "Testimonios",
      navContact: "Contacto",
      heroTitle: "Creamos experiencias digitales increíbles",
      heroSubtitle: "Diseño. Desarrollo. Resultados.",
      heroCTA: "Trabajemos juntos",
      servicesTitle: "Nuestros Servicios",
      service1Title: "Diseño UX/UI",
      service1Desc: "Interfaces intuitivas y atractivas.",
      service2Title: "Desarrollo Web",
      service2Desc: "Sitios rápidos, seguros y responsivos.",
      service3Title: "Branding",
      service3Desc: "Tu marca con personalidad y coherencia.",
      projectsTitle: "Proyectos Destacados",
      testimonial1: "Un equipo profesional, creativo y muy eficiente.",
      testimonial2: "Superaron nuestras expectativas en cada paso.",
      contactTitle: "Contacto",
      namePlaceholder: "Nombre",
      emailPlaceholder: "Correo electrónico",
      messagePlaceholder: "Mensaje",
      contactButton: "Enviar",
    }
  };
  
  let currentLanguage = "es";
  
  function changeLanguage() {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    const button = document.getElementById("langToggle");
  
    elementsToTranslate.forEach((el) => {
      const key = el.getAttribute("data-translate");
      el.innerHTML = translations[currentLanguage][key] || el.innerHTML;
      if (el.placeholder) {
        el.placeholder = translations[currentLanguage][key + "Placeholder"] || el.placeholder;
      }
    });
  
    currentLanguage = currentLanguage === "es" ? "en" : "es";
    button.innerText = currentLanguage === "es" ? "EN" : "ES";
  }
  
  document.getElementById("langToggle").addEventListener("click", changeLanguage);