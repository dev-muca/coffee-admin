import Image from "next/image";
import ImagePlaceholder from "../../../public/assets/svg/image_placeholder.svg";
import BoloMorango from "../../../public/assets/images/bolo_morango.jpg";

type Props = {
  product: string;
  img_url: string;
};

export function ProductCard({ product, img_url }: Props) {
  return (
    <div className="w-100 rounded border border-zinc-400">
      <div className="w-full h-10 bg-brown-300 text-white font-bold flex justify-center items-center rounded-t">
        {product.toUpperCase()}
      </div>
      <div className="border-y">
        <img src={img_url} alt={product} placeholder={ImagePlaceholder} className="h-60" />
      </div>
      <div className="bg-brown-300 rounded-b h-16 flex justify-center items-center ">
        <p className="text-white uppercase font-medium text-2xl">produto mais vendido</p>
      </div>
    </div>
  );
}
