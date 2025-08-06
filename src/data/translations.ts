export const translations = {
  en: {
    // Navigation & General
    availableToWork: "🎉 Available to work",
    heyIm: "Hey, I'm",
    
    // Sections
    experience: "EXPERIENCE",
    techSkills: "TECH SKILLS",
    featuredProjects: "FEATURED PROJECTS",
    
    // About & Bio
    about: "+4 years of experience. Software Engineer from Uruguay. Specialized in cross-platform bots, web and mobile applications.",
    
    // Experience descriptions
    experiences: {
      hospocket: [
        "✓ Developing screens and UI components for the web application using React and Chakra.",
        "✓ Integrated all the responsive design and fixed bugs in the frontend.",
      ],
      vertexstudio: [
        "✓ Web virtual reality for a metaverse platform in healthcare.",
        "✓ Development of bots for discord communities.",
        "✓ Others tasks connected to the nature of the job.",
        "✓ Code Improvements and Refactoring.",
      ],
      weshopu: [
        "✓ CRM management in Airtable.",
        "✓ Shopify maintenance.",
        "✓ Process automation.",
        "✓ Web development.",
      ],
    },
    
    // Tech Skills Categories
    techCategories: {
      frontend: "Frontend",
      backend: "Backend",
      mobileTools: "Mobile & Tools"
    },
    
    // Meta
    metaTitle: "Portfolio",
    metaDescription: "+4 years of experience. Software Engineer from Uruguay. Specialized in cross-platform bots, web and mobile applications.",
    
    // Language Toggle
    language: "Language",
    switchToSpanish: "Español",
    switchToEnglish: "English",
    
    // Navigation
    projects: "Projects",
    blog: "Blog",
    
    // Blog
    readMore: "Read more"
  },
  
  es: {
    // Navigation & General
    availableToWork: "🎉 Disponible para trabajar",
    heyIm: "Hola, soy",
    
    // Sections
    experience: "EXPERIENCIA",
    techSkills: "HABILIDADES TÉCNICAS",
    featuredProjects: "PROYECTOS DESTACADOS",
    
    // About & Bio
    about: "+4 años de experiencia. Ingeniero de Software de Uruguay. Especializado en bots multiplataforma, aplicaciones web y móviles.",
    
    // Experience descriptions
    experiences: {
      hospocket: [
        "✓ Desarrollo de pantallas y componentes UI para la aplicación web usando React y Chakra.",
        "✓ Integré todo el diseño responsivo y corregí errores en el frontend.",
      ],
      vertexstudio: [
        "✓ Realidad virtual web para una plataforma de metaverso en salud.",
        "✓ Desarrollo de bots para comunidades de discord.",
        "✓ Otras tareas relacionadas con la naturaleza del trabajo.",
        "✓ Mejoras de código y refactorización.",
      ],
      weshopu: [
        "✓ Gestión de CRM en Airtable.",
        "✓ Mantenimiento de Shopify.",
        "✓ Automatización de procesos.",
        "✓ Desarrollo web.",
      ],
    },
    
    // Tech Skills Categories
    techCategories: {
      frontend: "Frontend",
      backend: "Backend",
      mobileTools: "Móvil y Herramientas"
    },
    
    // Meta
    metaTitle: "Portafolio",
    metaDescription: "+4 años de experiencia. Ingeniero de Software de Uruguay. Especializado en bots multiplataforma, aplicaciones web y móviles.",
    
    // Language Toggle
    language: "Idioma",
    switchToSpanish: "Español",
    switchToEnglish: "English",
    
    // Navigation
    projects: "Proyectos",
    blog: "Blog",
    
    // Blog
    readMore: "Leer más"
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;