import { assetPath } from "./assets";

const galleryBase = "/image/galeria-antares";

export type GalleryImage = {
  src: string;
  alt: string;
};

export const construtoraBMainGallery: GalleryImage[] = [
  { src: assetPath(`${galleryBase}/01-fachada-externa.jpg`), alt: "Fachada externa de residência construída pela Antares" },
  { src: assetPath(`${galleryBase}/02-fachada-piscina.jpg`), alt: "Fachada com área externa e piscina" },
  { src: assetPath(`${galleryBase}/03-sala-escada.jpg`), alt: "Sala de estar com escada interna" },
  { src: assetPath(`${galleryBase}/04-escada-vidro.jpg`), alt: "Escada com guarda-corpo em vidro" },
  { src: assetPath(`${galleryBase}/05-cozinha.jpg`), alt: "Cozinha integrada com acabamento premium" },
  { src: assetPath(`${galleryBase}/06-area-externa.jpg`), alt: "Área externa e fachada lateral da residência" },
  { src: assetPath(`${galleryBase}/07-closet.jpg`), alt: "Closet planejado em residência Antares" },
  { src: assetPath(`${galleryBase}/08-banheiro.jpg`), alt: "Banheiro com acabamento moderno" },
  { src: assetPath(`${galleryBase}/09-render-fachada.png`), alt: "Render de fachada residencial Antares" },
  { src: assetPath(`${galleryBase}/10-obra-fachada.jpg`), alt: "Obra em andamento — fachada" },
  { src: assetPath(`${galleryBase}/11-obra-interior.jpg`), alt: "Obra em andamento — ambiente interno" },
  { src: assetPath(`${galleryBase}/12-obra-janelas.jpg`), alt: "Obra em andamento — esquadrias e janelas" },
];

export const construtoraBPortfolioGallery: GalleryImage[] = [
  { src: assetPath(`${galleryBase}/14-projeto-sala.jpg`), alt: "Projeto residencial — sala de estar" },
  { src: assetPath(`${galleryBase}/15-projeto-cozinha.jpg`), alt: "Projeto residencial — cozinha" },
  { src: assetPath(`${galleryBase}/16-projeto-externo.jpg`), alt: "Projeto residencial — área externa" },
];
