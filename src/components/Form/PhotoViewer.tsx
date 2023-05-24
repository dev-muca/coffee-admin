import Image from "next/image";
import ImagePlaceholder from "../../../public/assets/svg/image_placeholder.svg";

type Props = {
  img_url: string;
};

export function PhotoViewer({ img_url }: Props) {
  return (
    <div className="w-full mx-auto mt-8">
      <div className="w-full flex flex-row justify-center gap-4">
        <Image src={img_url} alt="Visualização da imagem" placeholder={ImagePlaceholder} className="w-64 h-44 border" />
        <span className="w-80 text-justify">
          Confira como a imagem irá ficar no cardápio (útil para analisar resolução e qualidade da imagem após
          carregada)
        </span>
      </div>
    </div>
  );
}
