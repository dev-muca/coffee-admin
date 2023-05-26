type Props = {
  product: string;
  img_url: string;
};

export function ProductCard({ product, img_url }: Props) {
  return (
    <div className="w-94 rounded border border-zinc-400">
      <div className="w-full h-14 bg-brown-300 text-white font-bold flex justify-center items-center rounded-t">
        {product.toUpperCase()}
      </div>
      <img src={img_url} alt={product} className="w-full h-full" />
      <div className="bg-brown-300 rounded-b h-16 flex justify-center items-center ">
        <p className="text-white uppercase font-medium text-2xl">produto mais vendido</p>
      </div>
    </div>
  );
}
