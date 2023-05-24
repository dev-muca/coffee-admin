type Props = {
  img_url: string;
};

export function PhotoViewer({ img_url }: Props) {
  const ImagePlaceholder = "https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png";

  return (
    <div className="w-full mx-auto my-12">
      <div className="w-full flex flex-row justify-center gap-4">
        <img
          src={img_url ? img_url : ImagePlaceholder}
          alt="Miniatura da imagem aqui"
          className="w-64 h-44 border border-zinc-400"
        />
        <span className="w-80 text-justify">
          Confira como a imagem irá ficar no cardápio (útil para analisar resolução e qualidade da imagem após
          carregada)
        </span>
      </div>
    </div>
  );
}
