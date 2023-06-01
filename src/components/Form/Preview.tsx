import Image from "next/image";
import Placeholder from "../../../public/assets/images/image.png";

type PreviewProps = {
  image: string;
};

export function Preview({ image }: PreviewProps) {
  return (
    <div className="w-full mx-auto my-12">
      <div className="flex flex-row justify-center gap-4">
        <picture className="min-w-[180px] max-w-[280px] max-h-[187px] min-h-[87px] border border-zinc-400 ">
          {image ? <img src={image} /> : <Image src={Placeholder} alt="Placeholder Image" />}
        </picture>
        <span className="w-80 text-justify text-xs md:text-base">
          Confira como a imagem irá ficar no cardápio (útil para analisar resolução e qualidade da imagem após
          carregada)
        </span>
      </div>
    </div>
  );
}
