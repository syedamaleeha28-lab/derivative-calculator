import type { Lang } from "./dictionary-types";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type LegalPageContent = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
  ctaLabel: string;
  relatedTitle: string;
};

const LAST_UPDATED = "2026-05-17";

const es: Record<string, LegalPageContent> = {
  privacy: {
    title: "Política de Privacidad",
    subtitle:
      "Transparencia sobre cómo tratamos la información cuando utilizas Calculadora Derivadas.",
    lastUpdated: LAST_UPDATED,
    ctaLabel: "Volver al inicio",
    relatedTitle: "Documentos legales",
    sections: [
      {
        id: "intro",
        title: "1. Introducción",
        paragraphs: [
          "Calculadora Derivadas («nosotros», «el sitio») es una herramienta educativa gratuita de cálculo diferencial disponible en calculadoraderivadas.app.",
          "Esta Política de Privacidad explica qué datos podemos recopilar, cómo los utilizamos y qué opciones tienes. Al usar el sitio, aceptas las prácticas descritas aquí.",
        ],
      },
      {
        id: "data",
        title: "2. Información que recopilamos",
        paragraphs: [
          "No exigimos registro ni cuenta de usuario. Podemos recopilar datos técnicos anónimos o seudonimizados: dirección IP abreviada, tipo de navegador, idioma, páginas visitadas, tiempo de sesión y eventos de uso de la calculadora.",
          "Si nos contactas voluntariamente, tratamos el contenido de tu mensaje únicamente para responder tu consulta.",
        ],
      },
      {
        id: "cookies",
        title: "3. Cookies y tecnologías similares",
        paragraphs: [
          "Utilizamos cookies y almacenamiento local para recordar preferencias de idioma, medir audiencia y, cuando corresponda, mostrar publicidad.",
          "Puedes gestionar o bloquear cookies desde la configuración de tu navegador. Algunas funciones del sitio pueden verse limitadas si desactivas cookies esenciales.",
        ],
      },
      {
        id: "ads",
        title: "4. Publicidad de terceros (Google AdSense)",
        paragraphs: [
          "Podemos mostrar anuncios mediante Google AdSense u otros proveedores. Estos terceros pueden usar cookies para ofrecer anuncios basados en visitas anteriores a este u otros sitios.",
          "Puedes consultar la política de privacidad de Google y gestionar preferencias de anuncios en https://policies.google.com/technologies/ads.",
        ],
      },
      {
        id: "purpose",
        title: "5. Finalidad del tratamiento",
        paragraphs: [
          "Usamos la información para operar y mejorar la calculadora, mantener la seguridad, analizar rendimiento, cumplir obligaciones legales y, cuando aplique, financiar el servicio gratuito mediante publicidad.",
          "No vendemos datos personales identificables a terceros.",
        ],
      },
      {
        id: "rights",
        title: "6. Tus derechos",
        paragraphs: [
          "Según tu jurisdicción, puedes solicitar acceso, rectificación, supresión u oposición al tratamiento de tus datos. Para ejercer estos derechos, contáctanos mediante la página de contacto.",
          "Si resides en la UE o el Reino Unido, también puedes presentar una reclamación ante tu autoridad de protección de datos.",
        ],
      },
      {
        id: "children",
        title: "7. Menores de edad",
        paragraphs: [
          "El sitio está dirigido a estudiantes y docentes. No recopilamos intencionalmente información de menores de 13 años. Si crees que un menor nos ha proporcionado datos, escríbenos para eliminarlos.",
        ],
      },
      {
        id: "changes",
        title: "8. Cambios en esta política",
        paragraphs: [
          "Podemos actualizar esta política para reflejar cambios legales o del servicio. Publicaremos la fecha de revisión al inicio del documento. El uso continuado del sitio implica la aceptación de la versión vigente.",
        ],
      },
      {
        id: "contact",
        title: "9. Contacto",
        paragraphs: [
          "Para preguntas sobre privacidad, visita nuestra página de contacto o escríbenos a través de las redes sociales oficiales enlazadas en el sitio.",
        ],
      },
    ],
  },
  terms: {
    title: "Términos de Servicio",
    subtitle: "Condiciones de uso de la calculadora de derivadas y recursos educativos.",
    lastUpdated: LAST_UPDATED,
    ctaLabel: "Aceptar y volver al inicio",
    relatedTitle: "Documentos legales",
    sections: [
      {
        id: "accept",
        title: "1. Aceptación de los términos",
        paragraphs: [
          "Al acceder a Calculadora Derivadas aceptas estos Términos de Servicio. Si no estás de acuerdo, no utilices el sitio.",
        ],
      },
      {
        id: "service",
        title: "2. Descripción del servicio",
        paragraphs: [
          "Ofrecemos una calculadora simbólica de derivadas, guías, ejemplos y artículos educativos. El servicio se proporciona «tal cual», sin garantía de disponibilidad ininterrumpida.",
        ],
      },
      {
        id: "educational",
        title: "3. Uso educativo",
        paragraphs: [
          "El contenido tiene fines informativos y académicos. No sustituye la enseñanza formal, tutorías profesionales ni asesoramiento certificado.",
          "Eres responsable de verificar resultados antes de entregas evaluadas o decisiones basadas en los cálculos.",
        ],
      },
      {
        id: "conduct",
        title: "4. Uso permitido",
        paragraphs: [
          "Te comprometes a no usar el sitio para actividades ilegales, interferir con su funcionamiento, extraer datos de forma automatizada abusiva ni intentar vulnerar la seguridad.",
        ],
      },
      {
        id: "ip",
        title: "5. Propiedad intelectual",
        paragraphs: [
          "El diseño, textos, marca y software del sitio son propiedad de Calculadora Derivadas o sus licenciantes. Puedes citar fragmentos con atribución; no está permitida la reproducción comercial sin autorización.",
        ],
      },
      {
        id: "liability",
        title: "6. Limitación de responsabilidad",
        paragraphs: [
          "No seremos responsables por daños indirectos, pérdida de datos o errores en resultados simbólicos derivados del uso de la herramienta, en la medida permitida por la ley aplicable.",
        ],
      },
      {
        id: "links",
        title: "7. Enlaces externos",
        paragraphs: [
          "El sitio puede enlazar a recursos de terceros. No controlamos ni respaldamos su contenido ni sus políticas de privacidad.",
        ],
      },
      {
        id: "changes",
        title: "8. Modificaciones",
        paragraphs: [
          "Podemos modificar estos términos o discontinuar funciones. Los cambios relevantes se reflejarán en esta página con fecha actualizada.",
        ],
      },
    ],
  },
  disclaimer: {
    title: "Aviso Legal y Descargo de Responsabilidad",
    subtitle: "Información importante sobre el uso educativo de la calculadora.",
    lastUpdated: LAST_UPDATED,
    ctaLabel: "Volver al inicio",
    relatedTitle: "Documentos legales",
    sections: [
      {
        id: "edu",
        title: "1. Propósito educativo",
        paragraphs: [
          "Calculadora Derivadas es un recurso de apoyo al aprendizaje de cálculo. Los resultados y explicaciones deben usarse como guía de estudio, no como única fuente para evaluaciones académicas o profesionales.",
        ],
      },
      {
        id: "accuracy",
        title: "2. Precisión de los resultados",
        paragraphs: [
          "Aunque empleamos motores simbólicos y revisión editorial, no garantizamos que todos los pasos o simplificaciones sean correctos en casos límite o notaciones poco habituales.",
        ],
      },
      {
        id: "ads",
        title: "3. Publicidad",
        paragraphs: [
          "El sitio puede mostrar anuncios de terceros (por ejemplo, Google AdSense) para mantener el acceso gratuito. No controlamos el contenido de los anuncios mostrados en tu región.",
        ],
      },
      {
        id: "external",
        title: "4. Enlaces y recursos externos",
        paragraphs: [
          "Los enlaces a sitios externos se ofrecen por conveniencia. No asumimos responsabilidad por su exactitud ni sus prácticas de datos.",
        ],
      },
      {
        id: "advice",
        title: "5. Sin asesoramiento profesional",
        paragraphs: [
          "Nada en este sitio constituye asesoramiento legal, financiero o profesional especializado.",
        ],
      },
    ],
  },
  about: {
    title: "Acerca de Nosotros",
    subtitle: "Quiénes somos y por qué creamos esta calculadora de derivadas.",
    lastUpdated: LAST_UPDATED,
    ctaLabel: "Usar la calculadora",
    relatedTitle: "Documentos legales",
    sections: [
      {
        id: "who",
        title: "Quiénes somos",
        paragraphs: [
          "Calculadora Derivadas es un proyecto educativo dedicado a hacer el cálculo diferencial más accesible para estudiantes de secundaria, universidad y docentes.",
          "Nuestro objetivo es combinar precisión simbólica con explicaciones claras, en español, inglés y portugués.",
        ],
      },
      {
        id: "mission",
        title: "Nuestra misión",
        paragraphs: [
          "Democratizar el acceso a herramientas de derivación paso a paso sin barreras de pago ni registro obligatorio.",
        ],
      },
      {
        id: "offer",
        title: "Qué ofrecemos",
        paragraphs: [
          "Calculadora simbólica en línea, reglas de derivación, ejemplos resueltos, artículos de blog y páginas temáticas sobre funciones comunes (seno, coseno, logaritmos, etc.).",
        ],
      },
      {
        id: "standards",
        title: "Compromiso editorial",
        paragraphs: [
          "Revisamos el contenido educativo con criterios de claridad matemática y coherencia pedagógica. Las actualizaciones se publican de forma periódica.",
        ],
      },
    ],
  },
  contact: {
    title: "Contacto",
    subtitle: "Estamos disponibles para consultas, sugerencias y asuntos de privacidad.",
    lastUpdated: LAST_UPDATED,
    ctaLabel: "Volver al inicio",
    relatedTitle: "Documentos legales",
    sections: [
      {
        id: "reach",
        title: "Cómo contactarnos",
        paragraphs: [
          "Puedes escribirnos a través de nuestra página de Facebook oficial (enlace en el pie de página) o dejar comentarios en publicaciones del blog educativo.",
          "Para consultas sobre privacidad o datos personales, indica «Privacidad» en el asunto de tu mensaje.",
        ],
      },
      {
        id: "response",
        title: "Tiempo de respuesta",
        paragraphs: [
          "Intentamos responder en un plazo de 2 a 5 días hábiles. Las solicitudes urgentes relacionadas con seguridad o datos personales tienen prioridad.",
        ],
      },
      {
        id: "feedback",
        title: "Sugerencias y reportes",
        paragraphs: [
          "Agradecemos reportes de errores en la calculadora o en el contenido educativo. Incluye la expresión ingresada y, si es posible, una captura del resultado esperado.",
        ],
      },
    ],
  },
};

const en: Record<string, LegalPageContent> = {
  privacy: {
    title: "Privacy Policy",
    subtitle: "How we handle information when you use Derivative Calculator.",
    lastUpdated: LAST_UPDATED,
    ctaLabel: "Back to home",
    relatedTitle: "Legal documents",
    sections: [
      {
        id: "intro",
        title: "1. Introduction",
        paragraphs: [
          "Derivative Calculator («we», «the site») is a free educational differential calculus tool at calculadoraderivadas.app.",
          "This Privacy Policy explains what data we may collect, how we use it, and your choices. By using the site, you agree to the practices described here.",
        ],
      },
      {
        id: "data",
        title: "2. Information we collect",
        paragraphs: [
          "We do not require registration. We may collect anonymous or pseudonymized technical data: truncated IP, browser type, language, pages visited, session duration, and calculator usage events.",
          "If you contact us voluntarily, we process your message only to respond.",
        ],
      },
      {
        id: "cookies",
        title: "3. Cookies and similar technologies",
        paragraphs: [
          "We use cookies and local storage for language preferences, analytics, and, where applicable, advertising.",
          "You can manage cookies in your browser settings. Some features may be limited if essential cookies are disabled.",
        ],
      },
      {
        id: "ads",
        title: "4. Third-party advertising (Google AdSense)",
        paragraphs: [
          "We may display ads through Google AdSense or other providers. Third parties may use cookies to serve ads based on prior visits to this or other sites.",
          "See Google’s ad policies at https://policies.google.com/technologies/ads.",
        ],
      },
      {
        id: "purpose",
        title: "5. Purpose of processing",
        paragraphs: [
          "We use information to operate and improve the calculator, maintain security, analyze performance, comply with law, and fund the free service through advertising when applicable.",
          "We do not sell personally identifiable data.",
        ],
      },
      {
        id: "rights",
        title: "6. Your rights",
        paragraphs: [
          "Depending on your jurisdiction, you may request access, correction, deletion, or objection to processing. Contact us via the contact page.",
          "EU/UK residents may lodge a complaint with their data protection authority.",
        ],
      },
      {
        id: "children",
        title: "7. Children’s privacy",
        paragraphs: [
          "The site is aimed at students and educators. We do not knowingly collect data from children under 13. Contact us to request deletion.",
        ],
      },
      {
        id: "changes",
        title: "8. Policy changes",
        paragraphs: [
          "We may update this policy. The revision date appears at the top. Continued use means acceptance of the current version.",
        ],
      },
      {
        id: "contact",
        title: "9. Contact",
        paragraphs: [
          "For privacy questions, visit our contact page or reach us through official social channels linked on the site.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    subtitle: "Terms governing use of the derivative calculator and educational resources.",
    lastUpdated: LAST_UPDATED,
    ctaLabel: "Accept and return home",
    relatedTitle: "Legal documents",
    sections: [
      {
        id: "accept",
        title: "1. Acceptance",
        paragraphs: [
          "By accessing Derivative Calculator you agree to these Terms. If you disagree, do not use the site.",
        ],
      },
      {
        id: "service",
        title: "2. Service description",
        paragraphs: [
          "We provide a symbolic derivative calculator, guides, examples, and educational articles. The service is provided «as is» without guaranteed uptime.",
        ],
      },
      {
        id: "educational",
        title: "3. Educational use",
        paragraphs: [
          "Content is for informational and academic purposes. It does not replace formal instruction or certified advice. Verify results before graded work.",
        ],
      },
      {
        id: "conduct",
        title: "4. Acceptable use",
        paragraphs: [
          "You agree not to use the site unlawfully, disrupt operations, abuse automated extraction, or attempt to compromise security.",
        ],
      },
      {
        id: "ip",
        title: "5. Intellectual property",
        paragraphs: [
          "Site design, text, branding, and software belong to Derivative Calculator or licensors. Short quotations with attribution are permitted; commercial reproduction requires permission.",
        ],
      },
      {
        id: "liability",
        title: "6. Limitation of liability",
        paragraphs: [
          "We are not liable for indirect damages, data loss, or symbolic errors from use of the tool, to the extent permitted by applicable law.",
        ],
      },
      {
        id: "links",
        title: "7. External links",
        paragraphs: [
          "We may link to third-party resources. We do not control their content or privacy practices.",
        ],
      },
      {
        id: "changes",
        title: "8. Modifications",
        paragraphs: [
          "We may change these terms or discontinue features. Material updates will be posted here with an updated date.",
        ],
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    subtitle: "Important information about educational use of the calculator.",
    lastUpdated: LAST_UPDATED,
    ctaLabel: "Back to home",
    relatedTitle: "Legal documents",
    sections: [
      {
        id: "edu",
        title: "1. Educational purpose",
        paragraphs: [
          "Derivative Calculator supports calculus learning. Results and explanations are study aids, not sole sources for academic or professional decisions.",
        ],
      },
      {
        id: "accuracy",
        title: "2. Accuracy",
        paragraphs: [
          "We use symbolic engines and editorial review but do not guarantee correctness in edge cases or unusual notation.",
        ],
      },
      {
        id: "ads",
        title: "3. Advertising",
        paragraphs: [
          "Third-party ads (e.g., Google AdSense) may appear to keep access free. We do not control ad content in your region.",
        ],
      },
      {
        id: "external",
        title: "4. External links",
        paragraphs: [
          "External links are provided for convenience. We are not responsible for their accuracy or data practices.",
        ],
      },
      {
        id: "advice",
        title: "5. No professional advice",
        paragraphs: [
          "Nothing on this site constitutes legal, financial, or specialized professional advice.",
        ],
      },
    ],
  },
  about: {
    title: "About Us",
    subtitle: "Who we are and why we built this derivative calculator.",
    lastUpdated: LAST_UPDATED,
    ctaLabel: "Open calculator",
    relatedTitle: "Legal documents",
    sections: [
      {
        id: "who",
        title: "Who we are",
        paragraphs: [
          "Derivative Calculator is an educational project making differential calculus more accessible to high school and university students and teachers.",
          "We combine symbolic precision with clear explanations in Spanish, English, and Portuguese.",
        ],
      },
      {
        id: "mission",
        title: "Our mission",
        paragraphs: [
          "Provide step-by-step differentiation tools without paywalls or mandatory registration.",
        ],
      },
      {
        id: "offer",
        title: "What we offer",
        paragraphs: [
          "Online symbolic calculator, differentiation rules, solved examples, blog articles, and topic pages for common functions.",
        ],
      },
      {
        id: "standards",
        title: "Editorial standards",
        paragraphs: [
          "We review educational content for mathematical clarity and pedagogical consistency. Updates are published periodically.",
        ],
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Reach us for questions, feedback, and privacy inquiries.",
    lastUpdated: LAST_UPDATED,
    ctaLabel: "Back to home",
    relatedTitle: "Legal documents",
    sections: [
      {
        id: "reach",
        title: "How to reach us",
        paragraphs: [
          "Contact us via our official Facebook page (footer link) or comments on educational blog posts.",
          "For privacy requests, include «Privacy» in your message subject.",
        ],
      },
      {
        id: "response",
        title: "Response time",
        paragraphs: [
          "We aim to reply within 2–5 business days. Security and data requests are prioritized.",
        ],
      },
      {
        id: "feedback",
        title: "Feedback and bug reports",
        paragraphs: [
          "Report calculator or content errors with the expression used and expected result when possible.",
        ],
      },
    ],
  },
};

const pt: Record<string, LegalPageContent> = {
  privacy: {
    title: "Política de Privacidade",
    subtitle: "Como tratamos informações quando você usa a Calculadora Derivadas.",
    lastUpdated: LAST_UPDATED,
    ctaLabel: "Voltar ao início",
    relatedTitle: "Documentos legais",
    sections: [
      {
        id: "intro",
        title: "1. Introdução",
        paragraphs: [
          "A Calculadora Derivadas («nós», «o site») é uma ferramenta educacional gratuita de cálculo diferencial em calculadoraderivadas.app.",
          "Esta Política de Privacidade explica quais dados podemos coletar, como os usamos e suas opções. Ao usar o site, você concorda com as práticas aqui descritas.",
        ],
      },
      {
        id: "data",
        title: "2. Informações que coletamos",
        paragraphs: [
          "Não exigimos cadastro. Podemos coletar dados técnicos anônimos ou pseudonimizados: IP truncado, navegador, idioma, páginas visitadas e uso da calculadora.",
          "Se você nos contatar, processamos a mensagem apenas para responder.",
        ],
      },
      {
        id: "cookies",
        title: "3. Cookies",
        paragraphs: [
          "Usamos cookies para preferências de idioma, análise e, quando aplicável, publicidade. Você pode gerenciá-los no navegador.",
        ],
      },
      {
        id: "ads",
        title: "4. Publicidade (Google AdSense)",
        paragraphs: [
          "Podemos exibir anúncios via Google AdSense. Terceiros podem usar cookies para anúncios personalizados. Consulte https://policies.google.com/technologies/ads.",
        ],
      },
      {
        id: "purpose",
        title: "5. Finalidade",
        paragraphs: [
          "Usamos dados para operar e melhorar a calculadora, segurança, análise e financiar o serviço gratuito. Não vendemos dados pessoais identificáveis.",
        ],
      },
      {
        id: "rights",
        title: "6. Seus direitos",
        paragraphs: [
          "Você pode solicitar acesso, correção ou exclusão conforme a lei aplicável. Use a página de contato.",
        ],
      },
      {
        id: "children",
        title: "7. Menores",
        paragraphs: [
          "Não coletamos intencionalmente dados de menores de 13 anos. Entre em contato para exclusão.",
        ],
      },
      {
        id: "changes",
        title: "8. Alterações",
        paragraphs: [
          "Podemos atualizar esta política. A data de revisão aparece no topo.",
        ],
      },
      {
        id: "contact",
        title: "9. Contato",
        paragraphs: [
          "Para privacidade, visite nossa página de contato ou redes sociais oficiais.",
        ],
      },
    ],
  },
  terms: {
    title: "Termos de Serviço",
    subtitle: "Condições de uso da calculadora e recursos educacionais.",
    lastUpdated: LAST_UPDATED,
    ctaLabel: "Aceitar e voltar ao início",
    relatedTitle: "Documentos legais",
    sections: [
      {
        id: "accept",
        title: "1. Aceitação",
        paragraphs: ["Ao acessar o site você aceita estes Termos."],
      },
      {
        id: "service",
        title: "2. Serviço",
        paragraphs: [
          "Oferecemos calculadora simbólica, guias e artigos. O serviço é fornecido «como está».",
        ],
      },
      {
        id: "educational",
        title: "3. Uso educacional",
        paragraphs: [
          "Conteúdo informativo e acadêmico. Verifique resultados antes de trabalhos avaliados.",
        ],
      },
      {
        id: "conduct",
        title: "4. Uso permitido",
        paragraphs: [
          "Não use o site de forma ilegal nem para comprometer a segurança.",
        ],
      },
      {
        id: "ip",
        title: "5. Propriedade intelectual",
        paragraphs: [
          "Design, textos e software pertencem à Calculadora Derivadas ou licenciantes.",
        ],
      },
      {
        id: "liability",
        title: "6. Responsabilidade",
        paragraphs: [
          "Não nos responsabilizamos por danos indiretos ou erros simbólicos, na medida da lei.",
        ],
      },
      {
        id: "links",
        title: "7. Links externos",
        paragraphs: ["Não controlamos sites de terceiros."],
      },
      {
        id: "changes",
        title: "8. Modificações",
        paragraphs: ["Podemos alterar estes termos com data atualizada."],
      },
    ],
  },
  disclaimer: {
    title: "Aviso Legal",
    subtitle: "Uso educativo da calculadora.",
    lastUpdated: LAST_UPDATED,
    ctaLabel: "Voltar ao início",
    relatedTitle: "Documentos legais",
    sections: [
      {
        id: "edu",
        title: "1. Fins educacionais",
        paragraphs: ["Recurso de apoio ao estudo de cálculo."],
      },
      {
        id: "accuracy",
        title: "2. Precisão",
        paragraphs: ["Não garantimos correção em todos os casos limite."],
      },
      {
        id: "ads",
        title: "3. Publicidade",
        paragraphs: ["Anúncios de terceiros podem ser exibidos (ex.: Google AdSense)."],
      },
      {
        id: "external",
        title: "4. Links externos",
        paragraphs: ["Links por conveniência, sem responsabilidade pelo conteúdo."],
      },
      {
        id: "advice",
        title: "5. Sem aconselhamento profissional",
        paragraphs: ["Nada constitui aconselhamento legal ou financeiro."],
      },
    ],
  },
  about: {
    title: "Sobre Nós",
    subtitle: "Quem somos e nossa missão educacional.",
    lastUpdated: LAST_UPDATED,
    ctaLabel: "Usar calculadora",
    relatedTitle: "Documentos legais",
    sections: [
      {
        id: "who",
        title: "Quem somos",
        paragraphs: [
          "Projeto educacional para tornar o cálculo diferencial acessível em espanhol, inglês e português.",
        ],
      },
      {
        id: "mission",
        title: "Missão",
        paragraphs: ["Ferramentas passo a passo gratuitas e sem cadastro obrigatório."],
      },
      {
        id: "offer",
        title: "O que oferecemos",
        paragraphs: [
          "Calculadora, regras, exemplos, blog e páginas temáticas.",
        ],
      },
      {
        id: "standards",
        title: "Padrões editoriais",
        paragraphs: ["Revisão periódica do conteúdo educacional."],
      },
    ],
  },
  contact: {
    title: "Contato",
    subtitle: "Dúvidas, sugestões e privacidade.",
    lastUpdated: LAST_UPDATED,
    ctaLabel: "Voltar ao início",
    relatedTitle: "Documentos legais",
    sections: [
      {
        id: "reach",
        title: "Como nos contatar",
        paragraphs: [
          "Facebook oficial (rodapé) ou comentários no blog. Para privacidade, indique «Privacidade».",
        ],
      },
      {
        id: "response",
        title: "Prazo de resposta",
        paragraphs: ["2 a 5 dias úteis em geral."],
      },
      {
        id: "feedback",
        title: "Feedback",
        paragraphs: ["Relate erros com a expressão e resultado esperado."],
      },
    ],
  },
};

const BY_LANG: Record<Lang, Record<string, LegalPageContent>> = { es, en, pt };

export type LegalPageKey = keyof typeof es;

export function getLegalPageContent(
  lang: Lang,
  page: LegalPageKey
): LegalPageContent {
  return BY_LANG[lang][page];
}
