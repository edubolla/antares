import { assetPath, pagePath } from "./assets";
import { contact } from "./landing";

export const construtoraBWebhookUrl =
  "https://n8n.metingertech.com.br/webhook/ab71bf35-5551-4dab-8195-e10da1115b57";

export const construtoraBPaths = {
  lp: pagePath("construtora-b"),
  obrigado: pagePath("construtora-b/obrigado"),
  formAnchor: "#formulario",
};

export const construtoraBWhatsApp = {
  number: "555192732893",
  label: "(51) 9273-2893",
  message:
    "Olá, acabei de preencher o formulário no site da Antares e gostaria de agilizar meu atendimento.",
};

export function construtoraBWhatsAppUrl(message = construtoraBWhatsApp.message) {
  return `https://wa.me/${construtoraBWhatsApp.number}?text=${encodeURIComponent(message)}`;
}

export const construtoraBImages = {
  hero: assetPath("/image/hero/obra%20completa%2000006.webp"),
  finalCta: assetPath("/image/cta-final/IMG_6765.webp"),
};

export const construtoraBCopy = {
  hero: {
    eyebrow: "Construtora em Canoas e região",
    title: "Construa sua casa com projeto e execução em um só lugar",
    subtitle:
      "Da documentação à entrega das chaves, com acompanhamento profissional em Canoas e região metropolitana.",
    cta: "Quero meu orçamento",
    trust: "Retorno em até 24h · sem compromisso · atendimento local",
  },
  about: {
    eyebrow: "Sobre nós",
    title: "Sua casa é mais do que um projeto",
    paragraphs: [
      "É o espaço onde sua família vai criar memórias.",
      "Porque construir não é apenas levantar paredes.",
      "É criar o lugar onde sua família vai viver os próximos anos da vida.",
    ],
    cta: "Solicitar orçamento",
  },
  portfolio: {
    eyebrow: "Portfólio",
    title: "Nossos projetos",
    subtitle: "Conceito, construção e obra pronta. Inspire-se!",
    highlights: [
      "Projeto sob-medida",
      "Equipe experiente",
      "Obras entregues no prazo",
      "Projeto 100% financiado",
    ],
    closing:
      "Clique no botão e fale agora mesmo com nossos profissionais. Tire dúvidas e solicite orçamento para seu projeto.",
    cta: "Quero meu orçamento",
  },
  differentials: {
    eyebrow: "Diferencial",
    items: [
      {
        title: "Financiamento facilitado",
        description:
          "Ajudamos você a entender as melhores possibilidades para tirar o projeto do papel.",
      },
      {
        title: "Obra acompanhada de verdade",
        description:
          "Você acompanha cada etapa da construção com suporte profissional e comunicação clara.",
      },
      {
        title: 'Execução completa "chave na mão"',
        description:
          "Da documentação ao acabamento final. Você evita retrabalho, atrasos e desgaste desnecessário.",
      },
    ],
  },
  form: {
    eyebrow: "Orçamento gratuito",
    title: "Receba orientação da equipe Antares",
    subtitle: "Preencha em menos de 1 minuto. Entramos em contato para o próximo passo.",
    submit: "Quero meu orçamento",
    submitting: "Enviando...",
    successRedirectNote: "Redirecionando...",
  },
  obrigado: {
    title: "Recebemos seus dados!",
    subtitle: "Obrigado por entrar em contato com a Antares Construtora.",
    body: "Nossa equipe já recebeu suas informações e em breve alguém entrará em contato com você.",
    whatsappCta: "Chamar no WhatsApp",
    whatsappHint: "Quer ser atendido mais rápido? Fale conosco agora pelo WhatsApp.",
    backCta: "Voltar ao site",
  },
};

export const construtoraBFormOptions = {
  terreno: [
    { value: "sim", label: "Sim" },
    { value: "nao", label: "Não" },
  ],
  financiamento: [
    { value: "valor_disponivel", label: "Já tenho o valor disponível" },
    { value: "financiar", label: "Pretendo financiar" },
    { value: "avaliando", label: "Ainda estou avaliando" },
  ],
  // Temporariamente oculto no formulário para reduzir fricção.
  // Mantido aqui para reativar depois sem perder o contrato do webhook.
  valor: [
    { value: "ate_130k", label: "Até R$ 130 mil" },
    { value: "130_200k", label: "De R$ 130 mil a R$ 200 mil" },
    { value: "200_500k", label: "De R$ 200 mil a R$ 500 mil" },
    { value: "acima_500k", label: "Acima de R$ 500 mil" },
  ],
};

export { contact };
