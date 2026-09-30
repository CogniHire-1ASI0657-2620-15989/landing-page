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
        "nav.signin": "Sign In",
        "nav.join": "Join Now",

        // Hero
        "hero.title": "Analizamos tu perfil para conseguir tu trabajo ideal.",
        "hero.subtitle": "Descubre qué habilidades te faltan para el puesto de tus sueños y prepárate con un plan personalizado paso a paso.",
        "hero.search.keyword": "Puesto, empresa o palabra clave",
        "hero.search.location": "Ciudad o remoto",
        "hero.search.btn": "Buscar",

        // App CTA (ir a la aplicación)
        "appcta.btn": "Ir a la aplicación",

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
        "benefits.seeall": "Ver todos los beneficios",

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

        // ---------- Página: Jobs ----------
        "jobs.hero.title": "Encuentra vacantes que hacen match con tu perfil.",
        "jobs.hero.subtitle": "Cada vacante muestra tu porcentaje de compatibilidad real, calculado con el mismo análisis de brecha que usamos en tu diagnóstico.",
        "jobs.filters.keyword": "Puesto o palabra clave",
        "jobs.filters.location": "Ciudad o remoto",
        "jobs.filters.level": "Nivel",
        "jobs.filters.level.all": "Todos los niveles",
        "jobs.filters.level.intern": "Practicante",
        "jobs.filters.level.junior": "Junior",
        "jobs.filters.level.trainee": "Trainee",
        "jobs.filters.btn": "Buscar",
        "jobs.results.count": "48 vacantes encontradas",
        "jobs.card.match": "match",
        "jobs.card.save": "Guardar",
        "jobs.card.view": "Ver detalle",
        "jobs.card.missing": "Te faltan",
        "jobs.job1.title": "Analista de Datos Jr.",
        "jobs.job1.company": "Nimbus Analytics",
        "jobs.job1.location": "Lima, remoto",
        "jobs.job1.type": "Tiempo completo",
        "jobs.job1.skill1": "SQL",
        "jobs.job1.skill2": "Power BI",
        "jobs.job2.title": "Desarrollador Frontend",
        "jobs.job2.company": "Bright Labs",
        "jobs.job2.location": "Ciudad de México, remoto",
        "jobs.job2.type": "Tiempo completo",
        "jobs.job2.skill1": "React",
        "jobs.job2.skill2": "TypeScript",
        "jobs.job3.title": "Asistente de Marketing Digital",
        "jobs.job3.company": "Loop Studio",
        "jobs.job3.location": "Bogotá, híbrido",
        "jobs.job3.type": "Prácticas",
        "jobs.job3.skill1": "SEO",
        "jobs.job3.skill2": "Meta Ads",
        "jobs.job4.title": "Ingeniero de Soporte Jr.",
        "jobs.job4.company": "Cortex Systems",
        "jobs.job4.location": "Santiago, remoto",
        "jobs.job4.type": "Tiempo completo",
        "jobs.job4.skill1": "Linux",
        "jobs.job4.skill2": "Networking",
        "jobs.cta.title": "¿No encuentras el puesto ideal?",
        "jobs.cta.body": "Dentro de la aplicación encuentras el listado completo de vacantes, ordenadas según tu porcentaje de compatibilidad.",
        "jobs.cta.btn": "Ir a la aplicación",

        // ---------- Página: Career Advice ----------
        "advice.hero.title": "Recursos para llegar preparado a cada etapa.",
        "advice.hero.subtitle": "Guías, plantillas y casos reales para tu CV, tus entrevistas y tu primer empleo.",
        "advice.cat1": "CV y portafolio",
        "advice.cat2": "Entrevistas",
        "advice.cat3": "Habilidades técnicas",
        "advice.cat4": "Primer empleo",
        "advice.article1.tag": "CV y portafolio",
        "advice.article1.title": "5 errores comunes en el CV de un recién egresado.",
        "advice.article1.excerpt": "Los reclutadores revisan un CV en menos de 10 segundos. Esto es lo que suele hacer que lo descarten.",
        "advice.article1.read": "6 min de lectura",
        "advice.article2.tag": "Entrevistas",
        "advice.article2.title": "Cómo responder '¿por qué deberíamos contratarte?' sin experiencia.",
        "advice.article2.excerpt": "Estructura tu respuesta con proyectos, prácticas y habilidades demostrables, aunque no tengas años de experiencia.",
        "advice.article2.read": "5 min de lectura",
        "advice.article3.tag": "Primer empleo",
        "advice.article3.title": "Guía para negociar tu primer sueldo.",
        "advice.article3.excerpt": "Sí, se puede negociar incluso en tu primer trabajo. Te contamos cómo prepararte para esa conversación.",
        "advice.article3.read": "7 min de lectura",
        "advice.article4.tag": "Habilidades técnicas",
        "advice.article4.title": "Qué habilidades técnicas piden más las empresas en 2026.",
        "advice.article4.excerpt": "Analizamos miles de vacantes en la plataforma para identificar las habilidades con mayor demanda.",
        "advice.article4.read": "8 min de lectura",
        "advice.article5.tag": "CV y portafolio",
        "advice.article5.title": "Cómo armar un portafolio si nunca has trabajado.",
        "advice.article5.excerpt": "Proyectos personales, freelance y trabajo universitario también cuentan. Te mostramos cómo presentarlos.",
        "advice.article5.read": "5 min de lectura",
        "advice.article6.tag": "Entrevistas",
        "advice.article6.title": "Preguntas frecuentes en entrevistas técnicas junior.",
        "advice.article6.excerpt": "Practica con el IA Coach usando este set de preguntas reales recopiladas de nuestras entrevistas simuladas.",
        "advice.article6.read": "6 min de lectura",
        "advice.templates.title": "Plantillas revisadas por reclutadores",
        "advice.templates.body": "Dentro de la plataforma encuentras plantillas para tu CV, tu carta de presentación y tu checklist de entrevista.",
        "advice.templates.item1": "Plantilla de CV",
        "advice.templates.item2": "Carta de presentación",
        "advice.templates.item3": "Checklist de entrevista",


        // ---------- Página: Beneficios (completa) ----------
        "beneficios.hero.title": "Todos los beneficios de PathBridge, en un solo lugar.",
        "beneficios.hero.subtitle": "Para candidatos, para empresas y con el respaldo de un asistente de IA disponible en todo momento.",
        "beneficios.faq.title": "Preguntas frecuentes",
        "beneficios.faq.q1": "¿Cómo calculan mi porcentaje de compatibilidad?",
        "beneficios.faq.a1": "Comparamos las habilidades de tu perfil con los requisitos reales de cada puesto, usando tanto tu CV como lo que completas en la plataforma.",
        "beneficios.faq.q2": "¿Mis datos son visibles para todas las empresas?",
        "beneficios.faq.a2": "No. Solo las empresas a las que postulas, o que buscan candidatos con tu perfil de habilidades, pueden ver tu información.",
        "beneficios.faq.q3": "¿Necesito experiencia previa para usar PathBridge?",
        "beneficios.faq.a3": "No. La plataforma está pensada justamente para quienes buscan su primer empleo o están cerrando su brecha de habilidades.",
        "beneficios.faq.q4": "¿El IA Coach reemplaza una entrevista real?",
        "beneficios.faq.a4": "No, la complementa. Es una forma de practicar y recibir feedback antes de tu entrevista real con una empresa.",
    },

    en: {
        // Header
        "nav.home": "Home",
        "nav.benefits": "Benefits",
        "nav.jobs": "Jobs",
        "nav.advice": "Career Advice",
        "nav.signin": "Sign In",
        "nav.join": "Join Now",

        // Hero
        "hero.title": "We analyze your profile to land your ideal job.",
        "hero.subtitle": "Discover which skills you're missing for the job of your dreams and get ready with a personalized step-by-step plan.",
        "hero.search.keyword": "Job title, company or keyword",
        "hero.search.location": "City or remote",
        "hero.search.btn": "Search",

        // App CTA (go to the app)
        "appcta.btn": "Go to the app",

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
        "benefits.seeall": "See all benefits",

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

        // ---------- Page: Jobs ----------
        "jobs.hero.title": "Find job postings that match your profile.",
        "jobs.hero.subtitle": "Every job shows your real compatibility score, calculated with the same gap analysis used in your diagnosis.",
        "jobs.filters.keyword": "Job title or keyword",
        "jobs.filters.location": "City or remote",
        "jobs.filters.level": "Level",
        "jobs.filters.level.all": "All levels",
        "jobs.filters.level.intern": "Intern",
        "jobs.filters.level.junior": "Junior",
        "jobs.filters.level.trainee": "Trainee",
        "jobs.filters.btn": "Search",
        "jobs.results.count": "48 jobs found",
        "jobs.card.match": "match",
        "jobs.card.save": "Save",
        "jobs.card.view": "View details",
        "jobs.card.missing": "You're missing",
        "jobs.job1.title": "Jr. Data Analyst",
        "jobs.job1.company": "Nimbus Analytics",
        "jobs.job1.location": "Lima, remote",
        "jobs.job1.type": "Full-time",
        "jobs.job1.skill1": "SQL",
        "jobs.job1.skill2": "Power BI",
        "jobs.job2.title": "Frontend Developer",
        "jobs.job2.company": "Bright Labs",
        "jobs.job2.location": "Mexico City, remote",
        "jobs.job2.type": "Full-time",
        "jobs.job2.skill1": "React",
        "jobs.job2.skill2": "TypeScript",
        "jobs.job3.title": "Digital Marketing Assistant",
        "jobs.job3.company": "Loop Studio",
        "jobs.job3.location": "Bogotá, hybrid",
        "jobs.job3.type": "Internship",
        "jobs.job3.skill1": "SEO",
        "jobs.job3.skill2": "Meta Ads",
        "jobs.job4.title": "Jr. Support Engineer",
        "jobs.job4.company": "Cortex Systems",
        "jobs.job4.location": "Santiago, remote",
        "jobs.job4.type": "Full-time",
        "jobs.job4.skill1": "Linux",
        "jobs.job4.skill2": "Networking",
        "jobs.cta.title": "Can't find the right job?",
        "jobs.cta.body": "Inside the app you'll find the full list of jobs, ranked by your compatibility score.",
        "jobs.cta.btn": "Go to the app",

        // ---------- Page: Career Advice ----------
        "advice.hero.title": "Resources to arrive prepared at every stage.",
        "advice.hero.subtitle": "Guides, templates and real cases for your resume, your interviews and your first job.",
        "advice.cat1": "Resume & portfolio",
        "advice.cat2": "Interviews",
        "advice.cat3": "Technical skills",
        "advice.cat4": "First job",
        "advice.article1.tag": "Resume & portfolio",
        "advice.article1.title": "5 common resume mistakes recent grads make.",
        "advice.article1.excerpt": "Recruiters review a resume in under 10 seconds. Here's what usually gets it tossed out.",
        "advice.article1.read": "6 min read",
        "advice.article2.tag": "Interviews",
        "advice.article2.title": "How to answer 'why should we hire you' with no experience.",
        "advice.article2.excerpt": "Structure your answer around projects, internships and demonstrable skills, even without years of experience.",
        "advice.article2.read": "5 min read",
        "advice.article3.tag": "First job",
        "advice.article3.title": "A guide to negotiating your first salary.",
        "advice.article3.excerpt": "Yes, you can negotiate even in your first job. Here's how to prepare for that conversation.",
        "advice.article3.read": "7 min read",
        "advice.article4.tag": "Technical skills",
        "advice.article4.title": "The technical skills companies are asking for most in 2026.",
        "advice.article4.excerpt": "We analyzed thousands of job postings on the platform to identify the most in-demand skills.",
        "advice.article4.read": "8 min read",
        "advice.article5.tag": "Resume & portfolio",
        "advice.article5.title": "How to build a portfolio if you've never worked before.",
        "advice.article5.excerpt": "Personal projects, freelance work and school projects count too. Here's how to present them.",
        "advice.article5.read": "5 min read",
        "advice.article6.tag": "Interviews",
        "advice.article6.title": "Common questions in junior technical interviews.",
        "advice.article6.excerpt": "Practice with the AI Coach using this set of real questions collected from our mock interviews.",
        "advice.article6.read": "6 min read",
        "advice.templates.title": "Recruiter-reviewed templates",
        "advice.templates.body": "Inside the platform you'll find templates for your resume, your cover letter and your interview checklist.",
        "advice.templates.item1": "Resume template",
        "advice.templates.item2": "Cover letter",
        "advice.templates.item3": "Interview checklist",


        // ---------- Page: Benefits (full) ----------
        "beneficios.hero.title": "All of PathBridge's benefits, in one place.",
        "beneficios.hero.subtitle": "For candidates, for companies, and backed by an AI assistant available around the clock.",
        "beneficios.faq.title": "Frequently asked questions",
        "beneficios.faq.q1": "How do you calculate my compatibility score?",
        "beneficios.faq.a1": "We compare your profile's skills against each job's real requirements, using both your resume and what you complete on the platform.",
        "beneficios.faq.q2": "Is my data visible to every company?",
        "beneficios.faq.a2": "No. Only companies you apply to, or that are searching for candidates with your skill profile, can see your information.",
        "beneficios.faq.q3": "Do I need prior experience to use PathBridge?",
        "beneficios.faq.a3": "No. The platform is built exactly for people looking for their first job or closing their skills gap.",
        "beneficios.faq.q4": "Does the AI Coach replace a real interview?",
        "beneficios.faq.a4": "No, it complements it. It's a way to practice and get feedback before your real interview with a company.",
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
