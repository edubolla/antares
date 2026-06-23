import { assetPath } from "./assets";
import { testimonials, whatsappUrl } from "./landing";

export { whatsappUrl };

export const construtoraNavigation = [
  { label: "Serviços", href: "#servicos" },
  { label: "Obras", href: "#obras" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#faq" },
];

export const construtoraMessages = {
  default: "Olá, estou procurando uma construtora e gostaria de conversar com a Antares.",
  terreno: "Olá, tenho um terreno e quero entender como a Antares pode me ajudar a construir.",
  projeto: "Olá, já tenho o projeto da minha casa e quero falar sobre a execução da obra.",
};

export const construtoraImages = {
  hero: assetPath("/image/hero/obra%20completa%2000006.webp"),
  finalCta: assetPath("/image/cta-final/IMG_6765.webp"),
};

export const construtoraServices = [
  {
    title: "Projeto",
    description: "Arquitetura e engenharia alinhadas ao que você quer construir.",
  },
  {
    title: "Documentação",
    description: "Aprovações e orientação técnica antes da obra começar.",
  },
  {
    title: "Execução",
    description: "Construção residencial com acompanhamento profissional.",
  },
];

export const construtoraMoments = [
  {
    title: "Tenho terreno e quero construir",
    description: "Ainda estou organizando o caminho do projeto à obra.",
    message: construtoraMessages.terreno,
    cta: "Falar sobre meu terreno",
  },
  {
    title: "Já tenho projeto e quero executar",
    description: "Preciso de uma construtora para conduzir a obra.",
    message: construtoraMessages.projeto,
    cta: "Falar sobre execução",
  },
];

export const construtoraDifferentials = [
  "Planejamento antes da obra",
  "Cronograma e etapas claras",
  "Gestão completa",
  "Acompanhamento profissional",
];

export const construtoraPortfolio = [
  {
    src: assetPath("/image/portfolio/casas%20prontas%2000008.webp"),
    alt: "Casa residencial finalizada com fachada contemporânea",
  },
  {
    src: assetPath("/image/portfolio/obra%20completa%2000002.webp"),
    alt: "Ambiente interno finalizado com acabamento premium",
  },
  {
    src: assetPath("/image/portfolio/obra%20completa%2000004.webp"),
    alt: "Cozinha moderna finalizada",
  },
  {
    src: assetPath("/image/portfolio/casas%20prontas%2000002.webp"),
    alt: "Fachada residencial concluída",
  },
];

export const construtoraTestimonials = testimonials.slice(0, 3);

export const construtoraFaqs = [
  {
    question: "Vocês constroem casas do zero?",
    answer: "Sim. A Antares atua com construção residencial, projeto, documentação, engenharia e execução completa.",
  },
  {
    question: "Preciso já ter projeto pronto?",
    answer: "Não. Podemos começar pelo projeto e seguir até a execução da obra.",
  },
  {
    question: "Vocês fazem reformas?",
    answer: "Não. A Antares constrói residências do zero, com projeto e execução integrados.",
  },
  {
    question: "Como começo a conversa?",
    answer: "Pelo WhatsApp. A equipe entende seu momento, responde dúvidas iniciais e orienta os próximos passos.",
  },
];
