import { assetPath } from "./assets";
import { testimonials, visualPortfolioImages, whatsappUrl } from "./landing";

export { whatsappUrl };

export const construtoraMessages = {
  default: "Olá, estou procurando uma construtora e gostaria de conversar com a Antares.",
  terreno: "Olá, tenho um terreno e quero entender como a Antares pode me ajudar a construir.",
  projeto: "Olá, já tenho o projeto da minha casa e quero falar sobre a execução da obra.",
};

export const construtoraImages = {
  hero: assetPath("/image/hero/obra%20completa%2000006.webp"),
  finalCta: assetPath("/image/cta-final/IMG_6765.webp"),
};

export const construtoraProof = {
  years: "+8 anos de mercado",
  regionsLabel: "Canoas e região",
  regions: [
    "Canoas",
    "Esteio",
    "São Leopoldo",
    "Gravataí",
    "Cachoeirinha",
    "Sapucaia do Sul",
    "Novo Hamburgo",
    "Campo Bom",
    "Ivoti",
    "Dois Irmãos",
  ],
  method: "Projeto, documentação e execução por uma única equipe",
};

export const construtoraMoments = [
  {
    title: "Já tenho terreno e quero construir",
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

export const construtoraProblem = {
  eyebrow: "O que pesa nessa decisão",
  title: "O medo não é construir. É escolher errado.",
  paragraphs: [
    "Contratar uma construtora mexe com seu dinheiro, seu tempo e a casa onde sua família vai morar.",
    "E o receio é sempre parecido: ficar dividido entre arquiteto, engenheiro e construtora — cada um cuidando de uma parte, ninguém respondendo pelo todo. Documentação parada na prefeitura. Ligação que não é respondida. Promessa que muda depois que o contrato é assinado.",
  ],
};

export const construtoraSolution = {
  eyebrow: "Como a Antares resolve",
  title: "Uma equipe só, do projeto à entrega da chave.",
  paragraph:
    "Você não contrata fornecedores separados. A Antares conduz o projeto arquitetônico, a documentação junto aos órgãos competentes e a execução da obra — com a mesma equipe respondendo por tudo, do primeiro desenho até a entrega da chave.",
};

export const construtoraBenefits = [
  {
    title: "Uma equipe, do desenho à chave",
    description: "Sem ficar dividido entre arquiteto, engenheiro e construtora.",
  },
  {
    title: "Documentação conduzida por nós",
    description: "Aprovações junto aos órgãos competentes, para sua obra não travar no caminho.",
  },
  {
    title: "Acompanhamento durante toda a obra",
    description: "Não só até a assinatura do contrato.",
  },
  {
    title: "+8 anos atendendo Canoas e região",
    description: "Não é a primeira casa que construímos na sua cidade.",
  },
];

const [photo1, , photo3, photo4, photo5, , , , photo9, photo10, photo11, photo12] = visualPortfolioImages;

// Fotos 2, 6, 7 e 8 removidas a pedido do cliente
export const construtoraPortfolio = [photo1, photo3, photo4, photo5, photo9, photo10, photo11, photo12];

export const construtoraTestimonials = [
  { ...testimonials[0], tag: "Atendimento atencioso" },
  { ...testimonials[1], tag: "Projeto complexo, resolvido" },
  { ...testimonials[2], tag: "No prazo combinado" },
  { ...testimonials[3], tag: "Do orçamento ao projeto" },
];

export const construtoraFaqs = [
  {
    question: "Vocês constroem casas do zero?",
    answer: "Sim. A Antares atua com construção residencial completa: projeto, documentação, engenharia e execução.",
  },
  {
    question: "Vocês atendem minha cidade?",
    answer:
      "Atendemos Canoas e cidades próximas: Esteio, São Leopoldo, Gravataí, Cachoeirinha, Sapucaia do Sul, Novo Hamburgo, Campo Bom, Ivoti e Dois Irmãos. Fora dessa região, fale com a equipe pelo WhatsApp para confirmar.",
  },
  {
    question: "Preciso já ter projeto pronto?",
    answer: "Não. Podemos começar pelo projeto e seguir até a execução da obra.",
  },
  {
    question: "Quem cuida da documentação e das aprovações?",
    answer:
      "A própria Antares conduz a documentação e as aprovações junto aos órgãos competentes — você não precisa correr atrás disso separadamente.",
  },
  {
    question: "Vocês fazem reformas?",
    answer: "Não. A Antares constrói residências do zero, com projeto e execução integrados.",
  },
  {
    question: "Como começo a conversa?",
    answer: "Pelo WhatsApp. A equipe entende seu momento, responde dúvidas iniciais e orienta os próximos passos, sem compromisso.",
  },
];
