import Image from "next/image";
import Placeholder from "../../../public/assets/images/image.png";

type ProductCardProps = {
  name?: string;
  image?: string;
};

export function ProductCard({ name, image }: ProductCardProps) {
  return (
    <div className="min-w-[400px] w-[400px] min-h-[350px] h-[350px] shadow-xl rounded overflow-hidden hover:scale-105 duration-300">
      <div className="w-full h-10 bg-gradient-to-r from-yellow-950 to-orange-950 flex justify-center items-center">
        <p className="uppercase text-white font-medium">{name}</p>
      </div>
      <picture>
        {image ? (
          <img src={image} alt={name} className="h-[230px]" />
        ) : (
          <Image src={Placeholder} alt="Placeholder Image" className="h-[230px]" />
        )}
      </picture>
      <div className="w-full h-20 bg-gradient-to-r from-yellow-950 to-orange-950 flex justify-center items-center">
        <h1 className="uppercase text-white text-2xl font-medium">Produto mais vendido</h1>
      </div>
    </div>
  );
}
