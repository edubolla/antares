export const whatsappNumber = "5551999747745";
export const whatsappLabel = "(51) 99974-7745";

export function whatsappUrl(message = "Olá, comprei um terreno e gostaria de entender como funciona o projeto e a execução da minha casa.") {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navigation = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#faq" },
];

export const images = {
  logoBlue: "/image/logotipo/logo%20antares%20azul.png",
  logoWhite: "/image/logotipo/logo%20antares%20branco.png",
  favicon: "/image/logotipo/favicon.png",
  hero: "/image/hero/obra%20completa%2000001.webp",
  heroAlt: "/image/hero/obra%20completa%2000006.webp",
  pain: "/image/processo/IMG_0903.webp",
  solution: "/image/processo/projeto%2000002.webp",
  process: "/image/processo/projeto%2000001.webp",
  processInterior: "/image/processo/IMG_9965.webp",
  processFoundation: "/image/processo/IMG_0902.webp",
  detail: "/image/portfolio/20251101_152003207_iOS.webp",
  testimonial: "/image/prova-social/PHOTO-2025-03-25-14-41-09.webp",
  finalCta: "/image/cta-final/IMG_6765.webp",
};

export const processSteps = [
  {
    title: "Diagnóstico do terreno e necessidades",
    description: "Entendemos seu momento, terreno, rotina da família e principais dúvidas antes de propor qualquer caminho.",
  },
  {
    title: "Projeto arquitetônico",
    description: "Transformamos suas prioridades em uma planta funcional, viável e alinhada ao que você quer construir.",
  },
  {
    title: "Engenharia e documentação",
    description: "Organizamos os pontos técnicos e aprovações para reduzir riscos antes da obra começar.",
  },
  {
    title: "Orçamento e planejamento",
    description: "Você enxerga etapas, custos e decisões importantes com mais clareza antes de assumir a construção.",
  },
  {
    title: "Execução com acompanhamento técnico",
    description: "A obra é conduzida por uma equipe profissional, com comunicação e acompanhamento durante o processo.",
  },
  {
    title: "Entrega da obra",
    description: "A conclusão vem com orientação final para você receber a casa com mais segurança e tranquilidade.",
  },
];

export const differentials = [
  {
    title: "Planejamento antes da obra",
    description: "As decisões importantes são organizadas antes de virar custo, atraso ou retrabalho.",
  },
  {
    title: "Gestão completa",
    description: "Projeto, documentação, engenharia e execução conectados por uma única equipe.",
  },
  {
    title: "Acompanhamento profissional",
    description: "Você acompanha a evolução da obra com clareza, orientação técnica e comunicação constante.",
  },
  {
    title: "Mais previsibilidade",
    description: "Cronograma, orçamento e etapas bem definidos para reduzir surpresas no caminho.",
  },
];

export const portfolioImages = [
  {
    src: "/image/portfolio/obra%20completa%2000002.webp",
    alt: "Ambiente interno finalizado com iluminação e acabamento premium",
  },
  {
    src: "/image/portfolio/obra%20completa%2000004.webp",
    alt: "Cozinha moderna finalizada com ilha e marcenaria",
  },
  {
    src: "/image/portfolio/obra%20completa%2000005.webp",
    alt: "Área externa coberta com forro de madeira",
  },
  {
    src: "/image/portfolio/20250807_213918460_iOS.webp",
    alt: "Banheiro finalizado com revestimento em pedra",
  },
  {
    src: "/image/portfolio/casas%20prontas%2000002.webp",
    alt: "Fachada residencial moderna concluída",
  },
];

export const visualPortfolioImages = [
  {
    src: "/image/portfolio/casas%20prontas%2000008.webp",
    alt: "Casa pronta com pátio em pedra e fachada contemporânea",
    label: "Casa pronta",
  },
  {
    src: "/image/portfolio/casas%20prontas%2000002.webp",
    alt: "Casa residencial moderna finalizada",
    label: "Casa pronta",
  },
  {
    src: "/image/portfolio/obra%20completa%2000007.webp",
    alt: "Interior premium finalizado com iluminação linear",
    label: "Interiores",
  },
  {
    src: "/image/portfolio/casas%20prontas%2000004.webp",
    alt: "Casa pronta com fachada contemporânea",
    label: "Entrega",
  },
  {
    src: "/image/portfolio/casas%20prontas%2000005.webp",
    alt: "Residência concluída com acabamento externo",
    label: "Projeto",
  },
  {
    src: "/image/portfolio/casas%20prontas%2000006.webp",
    alt: "Casa térrea finalizada",
    label: "Obra pronta",
  },
  {
    src: "/image/portfolio/casas%20prontas%2000003.webp",
    alt: "Fachada residencial finalizada pela Antares",
    label: "Residencial",
  },
  {
    src: "/image/portfolio/casas%20prontas%2000009.webp",
    alt: "Casa pronta com volumetria moderna",
    label: "Arquitetura",
  },
  {
    src: "/image/portfolio/obra%20completa%2000002.webp",
    alt: "Ambiente social integrado com iluminação premium",
    label: "Interiores",
  },
  {
    src: "/image/portfolio/obra%20completa%2000004.webp",
    alt: "Cozinha moderna finalizada com ilha",
    label: "Acabamento",
  },
  {
    src: "/image/portfolio/obra%20completa%2000005.webp",
    alt: "Área externa coberta com forro de madeira",
    label: "Área externa",
  },
  {
    src: "/image/portfolio/20250807_213918460_iOS.webp",
    alt: "Banheiro com revestimento em pedra",
    label: "Detalhes",
  },
];

export const testimonials = [
  {
    name: "Fernanda Vargas",
    quote:
      "Profissionais sérios, sempre prestativos e atenciosos, com foco nas soluções.",
  },
  {
    name: "Carlos Gonçalves",
    quote:
      "Tínhamos um projeto difícil em mãos e mesmo assim tornaram a execução fácil e rápida.",
  },
  {
    name: "Luiz Carlos Bertol Júnior",
    quote:
      "Cumpriu com nosso projeto. Fizeram tudo com qualidade e no prazo, podem confiar.",
  },
  {
    name: "Márcia Vieira de Lima",
    quote:
      "Comecei com uma consulta simples, visitei algumas obras e aprovei o orçamento. Também fiz o projeto com a construtora, que compreendeu minhas necessidades.",
  },
];

export const faqs = [
  {
    question: "Quanto custa construir uma casa?",
    answer:
      "Depende do terreno, metragem, padrão de acabamento, projeto e escopo da obra. O primeiro passo é entender seu objetivo para montar uma estimativa realista, sem chute genérico.",
  },
  {
    question: "Vocês ajudam com financiamento?",
    answer:
      "A equipe orienta as etapas iniciais de documentação e planejamento para que você entenda o que precisa organizar antes de avançar com a construção.",
  },
  {
    question: "Quanto tempo leva?",
    answer:
      "O prazo varia conforme projeto, aprovação documental e complexidade da obra. A proposta é definir um cronograma antes da execução começar, para evitar promessas vagas.",
  },
  {
    question: "Posso acompanhar a obra?",
    answer:
      "Sim. A proposta é manter acompanhamento profissional e comunicação constante durante as etapas da construção.",
  },
  {
    question: "Vocês cuidam da documentação?",
    answer:
      "Sim. A Antares atua com projeto, engenharia e aprovação documental, além da execução completa da obra.",
  },
  {
    question: "Vocês fazem projeto e obra juntos?",
    answer:
      "Sim. Essa é justamente a proposta da landing Projeto + Execução: conectar projeto arquitetônico, engenharia, documentação e construção em um único processo.",
  },
  {
    question: "Posso chamar mesmo sem saber quanto quero investir?",
    answer:
      "Sim. A conversa inicial serve para entender terreno, expectativas, padrão desejado e próximos passos antes de falar em um orçamento definitivo.",
  },
  {
    question: "Preciso já ter projeto pronto?",
    answer:
      "Não. Para a Persona Projeto + Execução, a Antares pode começar desde o projeto arquitetônico e seguir com documentação, engenharia e construção.",
  },
  {
    question: "Vocês fazem reformas?",
    answer:
      "Não. A Antares atua com construção residencial, projeto, documentação, engenharia e execução completa.",
  },
];

export const contact = {
  address: "R. Domingos Martins, 121 - Sala 905 - Centro, Canoas - RS, 92010-170",
  instagram: "https://www.instagram.com/antaresconstrutoracanoas",
  facebook: "https://www.facebook.com/antaresconstrutoracanoas",
};
