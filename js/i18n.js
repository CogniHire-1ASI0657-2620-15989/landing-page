/**
 * i18n.js — diccionario ES/EN y lógica del selector de idioma para PathBridge.
 *
 * Cada string visible de la página vive aquí, bajo una key con notación de
 * puntos (ej. "hero.title"). Los elementos del HTML se marcan con
 * data-i18n="clave" (para textContent) o data-i18n-placeholder="clave"
 * (para el placeholder de inputs). Al cambiar de idioma, applyLanguage()
 * recorre el DOM y actualiza todo de una sola vez.
 *
 * La preferencia de idioma se guarda en localStorage bajo "pathbridge.lang"
 * para que se mantenga entre visitas.
 */

const translations = {
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.benefits": "Beneficios",
    "nav.jobs": "Jobs",
    "nav.advice": "Career Advice",
    "nav.companies": "Companies",
    "nav.signin": "Sign In",
    "nav.join": "Join Now",

    // Hero
    "hero.title": "Analizamos tu perfil para conseguir tu trabajo ideal.",
    "hero.subtitle": "Descubre qué habilidades te faltan para el puesto de tus sueños y prepárate con un plan personalizado paso a paso.",
    "hero.search.keyword": "Puesto, empresa o palabra clave",
    "hero.search.location": "Ciudad o remoto",
    "hero.search.btn": "Buscar",

    // Trusted companies
    "trusted.label": "EMPRESAS QUE CONFÍAN EN NUESTRO TALENTO",

    // How it works
    "how.title": "¿Cómo funciona?",
    "how.step1.title": "Análisis de Brecha",
    "how.step1.body": "Comparamos tu perfil con los requisitos exactos del puesto que deseas.",
    "how.step2.title": "Plan de Estudio Personalizado",
    "how.step2.body": "Recomendaciones de cursos en Platzi o Udemy basados en lo que te falta.",
    "how.step3.title": "Entrenamiento con IA Coach",
    "how.step3.body": "Practica entrevistas y simulaciones una vez que termines tus cursos.",
    "how.step4.title": "¡Listo para el Empleo!",
    "how.step4.body": "Sigue tu progreso de aprendizaje y postulaciones hasta que seas contratado.",

    // Beneficios (nueva sección)
    "benefits.eyebrow": "La plataforma",
    "benefits.title": "Una experiencia pensada para cada etapa de tu camino profesional.",
    "benefits.body": "Ya sea que busques tu primer empleo o quieras cerrar la brecha de habilidades que piden las empresas, PathBridge conecta preparación real con oportunidades reales.",

    "benefits.candidates.eyebrow": "Para candidatos",
    "benefits.candidates.title": "Prepárate con un plan hecho a tu medida.",
    "benefits.candidates.body": "Identificamos exactamente qué te falta para el puesto que quieres y te damos un camino claro para lograrlo.",
    "benefits.candidates.feat1.lead": "Análisis de brecha personalizado",
    "benefits.candidates.feat1.rest": " — comparamos tu perfil con los requisitos reales del puesto.",
    "benefits.candidates.feat2.lead": "Rutas de aprendizaje curadas",
    "benefits.candidates.feat2.rest": " con cursos de Platzi y Udemy elegidos según lo que necesitas.",
    "benefits.candidates.feat3.lead": "Práctica con IA Coach",
    "benefits.candidates.feat3.rest": " en simulacros de entrevista antes de postular.",
    "benefits.candidates.link": "Ver cómo funciona",
    "benefits.candidates.visual.title": "Compatibilidad con el puesto",
    "benefits.candidates.visual.skill1": "SQL",
    "benefits.candidates.visual.skill2": "Python",
    "benefits.candidates.visual.skill3": "Comunicación",

    "benefits.companies.eyebrow": "Para empresas",
    "benefits.companies.title": "Accede a talento junior que ya llegó preparado.",
    "benefits.companies.body": "Reduce el tiempo de selección con candidatos que ya cerraron su brecha de habilidades antes de postular.",
    "benefits.companies.feat1.lead": "Perfiles verificados por habilidades",
    "benefits.companies.feat1.rest": ", no solo currículums, sino evidencia real de aprendizaje.",
    "benefits.companies.feat2.lead": "Filtrado inteligente",
    "benefits.companies.feat2.rest": " para encontrar candidatos listos para el puesto exacto.",
    "benefits.companies.feat3.lead": "Menor rotación temprana",
    "benefits.companies.feat3.rest": ": el candidato ya sabe lo que implica el rol.",
    "benefits.companies.link": "Conoce el plan para empresas",
    "benefits.companies.visual.title": "Candidatos listos",
    "benefits.companies.visual.candidate1": "Ana S. · Datos",
    "benefits.companies.visual.candidate2": "Carlos M. · Frontend",
    "benefits.companies.visual.match": "match",

    "benefits.ai.eyebrow": "Asistente IA",
    "benefits.ai.title": "Un coach de entrevistas disponible cuando lo necesites.",
    "benefits.ai.body": "Practica simulacros reales, recibe feedback inmediato y llega a tu entrevista con confianza.",
    "benefits.ai.feat1.lead": "Simulacros ilimitados",
    "benefits.ai.feat1.rest": " — practica tantas veces como quieras, sin costo extra.",
    "benefits.ai.feat2.lead": "Feedback instantáneo",
    "benefits.ai.feat2.rest": " sobre tono, claridad y estructura de tus respuestas.",
    "benefits.ai.feat3.lead": "Disponible 24/7",
    "benefits.ai.feat3.rest": ": sin agendar turno ni esperar.",
    "benefits.ai.link": "Probar el coach de entrevistas",
    "benefits.ai.visual.name": "IA Coach · PathBridge",
    "benefits.ai.visual.status": "En línea",
    "benefits.ai.visual.msg1": "¿Por qué quieres trabajar en esta empresa?",
    "benefits.ai.visual.msg2": "Buena respuesta. Intenta ser más específico con un ejemplo.",

    // Impulsa tu carrera
    "boost.title": "Impulsa tu carrera",
    "boost.card1.title": "Análisis de Puesto vs Perfil",
    "boost.card1.body": "Identificamos la brecha exacta entre tus habilidades actuales y lo que exige el mercado para tu puesto ideal.",
    "boost.card2.title": "Cursos de Platzi y Udemy Integrados",
    "boost.card2.body": "Accede a recomendaciones de cursos seleccionados para cubrir específicamente tus áreas de oportunidad.",
    "boost.card3.title": "Coach de Entrevistas con IA",
    "boost.card3.body": "Practica con nuestro agente de inteligencia artificial para superar cualquier filtro en tus procesos de selección.",

    // CTA
    "cta.title": "Comienza tu diagnóstico de carrera",
    "cta.body": "Únete a miles de profesionales que ya están cerrando su brecha de habilidades, preparándose de manera efectiva y consiguiendo el trabajo de sus sueños.",
    "cta.btn": "Iniciar diagnóstico",

    // Success stories
    "stories.title": "Casos de Éxito",
    "stories.role1": "Analista de Datos Jr.",
    "stories.quote1": "\"Conseguí mi primera práctica en menos de dos semanas. La plataforma es muy intuitiva y las empresas responden rápido.\"",
    "stories.role2": "Desarrollador Frontend",
    "stories.quote2": "\"La herramienta de revisión de CV me ayudó a destacar mis proyectos universitarios de la manera correcta. Totalmente recomendada.\"",
    "stories.role3": "Asistente de Marketing",
    "stories.quote3": "\"Encontrar ofertas que realmente fueran para 'sin experiencia' fue un alivio. PathBridge entiende lo que los recién graduados necesitamos.\"",

    // Footer
    "footer.about": "About Us",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.help": "Help Center",
    "footer.copy": "© 2026 PathBridge. Bridging the gap from campus to career.",
  },

  en: {
    // Header
    "nav.home": "Home",
    "nav.benefits": "Benefits",
    "nav.jobs": "Jobs",
    "nav.advice": "Career Advice",
    "nav.companies": "Companies",
    "nav.signin": "Sign In",
    "nav.join": "Join Now",

    // Hero
    "hero.title": "We analyze your profile to land your ideal job.",
    "hero.subtitle": "Discover which skills you're missing for the job of your dreams and get ready with a personalized step-by-step plan.",
    "hero.search.keyword": "Job title, company or keyword",
    "hero.search.location": "City or remote",
    "hero.search.btn": "Search",

    // Trusted companies
    "trusted.label": "COMPANIES THAT TRUST OUR TALENT",

    // How it works
    "how.title": "How does it work?",
    "how.step1.title": "Gap Analysis",
    "how.step1.body": "We compare your profile with the exact requirements of the job you want.",
    "how.step2.title": "Personalized Study Plan",
    "how.step2.body": "Course recommendations on Platzi or Udemy based on what you're missing.",
    "how.step3.title": "AI Coach Training",
    "how.step3.body": "Practice interviews and simulations once you finish your courses.",
    "how.step4.title": "Ready for the Job!",
    "how.step4.body": "Track your learning progress and applications until you get hired.",

    // Benefits (new section)
    "benefits.eyebrow": "The platform",
    "benefits.title": "An experience built for every stage of your career path.",
    "benefits.body": "Whether you're looking for your first job or need to close the skills gap companies ask for, PathBridge connects real preparation with real opportunities.",

    "benefits.candidates.eyebrow": "For candidates",
    "benefits.candidates.title": "Get ready with a plan built just for you.",
    "benefits.candidates.body": "We identify exactly what you're missing for the job you want and give you a clear path to get there.",
    "benefits.candidates.feat1.lead": "Personalized gap analysis",
    "benefits.candidates.feat1.rest": " — we compare your profile against the job's real requirements.",
    "benefits.candidates.feat2.lead": "Curated learning paths",
    "benefits.candidates.feat2.rest": " with Platzi and Udemy courses chosen for what you need.",
    "benefits.candidates.feat3.lead": "Practice with AI Coach",
    "benefits.candidates.feat3.rest": " through mock interviews before you apply.",
    "benefits.candidates.link": "See how it works",
    "benefits.candidates.visual.title": "Job match score",
    "benefits.candidates.visual.skill1": "SQL",
    "benefits.candidates.visual.skill2": "Python",
    "benefits.candidates.visual.skill3": "Communication",

    "benefits.companies.eyebrow": "For companies",
    "benefits.companies.title": "Access junior talent that already arrives prepared.",
    "benefits.companies.body": "Cut down screening time with candidates who already closed their skills gap before applying.",
    "benefits.companies.feat1.lead": "Skill-verified profiles",
    "benefits.companies.feat1.rest": ", not just resumes, but real evidence of learning.",
    "benefits.companies.feat2.lead": "Smart filtering",
    "benefits.companies.feat2.rest": " to find candidates ready for the exact role.",
    "benefits.companies.feat3.lead": "Lower early turnover",
    "benefits.companies.feat3.rest": ": the candidate already knows what the role involves.",
    "benefits.companies.link": "Explore the plan for companies",
    "benefits.companies.visual.title": "Ready candidates",
    "benefits.companies.visual.candidate1": "Ana S. · Data",
    "benefits.companies.visual.candidate2": "Carlos M. · Frontend",
    "benefits.companies.visual.match": "match",

    "benefits.ai.eyebrow": "AI Assistant",
    "benefits.ai.title": "An interview coach available whenever you need it.",
    "benefits.ai.body": "Practice real mock interviews, get instant feedback, and walk into your interview with confidence.",
    "benefits.ai.feat1.lead": "Unlimited mock interviews",
    "benefits.ai.feat1.rest": " — practice as many times as you want, at no extra cost.",
    "benefits.ai.feat2.lead": "Instant feedback",
    "benefits.ai.feat2.rest": " on tone, clarity, and the structure of your answers.",
    "benefits.ai.feat3.lead": "Available 24/7",
    "benefits.ai.feat3.rest": ": no booking a slot, no waiting.",
    "benefits.ai.link": "Try the interview coach",
    "benefits.ai.visual.name": "AI Coach · PathBridge",
    "benefits.ai.visual.status": "Online",
    "benefits.ai.visual.msg1": "Why do you want to work at this company?",
    "benefits.ai.visual.msg2": "Good answer. Try to be more specific with an example.",

    // Boost your career
    "boost.title": "Boost your career",
    "boost.card1.title": "Job vs Profile Analysis",
    "boost.card1.body": "We identify the exact gap between your current skills and what the market demands for your ideal job.",
    "boost.card2.title": "Integrated Platzi and Udemy Courses",
    "boost.card2.body": "Access curated course recommendations to specifically cover your areas of opportunity.",
    "boost.card3.title": "AI Interview Coach",
    "boost.card3.body": "Practice with our AI agent to get past any filter in your selection processes.",

    // CTA
    "cta.title": "Start your career diagnosis",
    "cta.body": "Join thousands of professionals who are already closing their skills gap, preparing effectively, and landing the job of their dreams.",
    "cta.btn": "Start diagnosis",

    // Success stories
    "stories.title": "Success Stories",
    "stories.role1": "Jr. Data Analyst",
    "stories.quote1": "\"I got my first internship in less than two weeks. The platform is very intuitive and companies respond fast.\"",
    "stories.role2": "Frontend Developer",
    "stories.quote2": "\"The resume review tool helped me highlight my university projects the right way. Totally recommended.\"",
    "stories.role3": "Marketing Assistant",
    "stories.quote3": "\"Finding job postings that were truly for 'no experience' was a relief. PathBridge understands what recent grads need.\"",

    // Footer
    "footer.about": "About Us",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.help": "Help Center",
    "footer.copy": "© 2026 PathBridge. Bridging the gap from campus to career.",
  },
};

const STORAGE_KEY = "pathbridge.lang";
const DEFAULT_LANG = "es";

function getSavedLang() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (_) {
    return null;
  }
}

function saveLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (_) {
    /* private mode, etc. — ignore */
  }
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations[DEFAULT_LANG];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-lang-switcher] .lang-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  applyLanguage(lang);
  saveLang(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const initialLang = getSavedLang() || DEFAULT_LANG;
  applyLanguage(initialLang);

  document.querySelectorAll("[data-lang-switcher] .lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });
});
