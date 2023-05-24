import { ProductBadge } from "@/components/Product/ProductBadge";
import { ProductCard } from "@/components/Product/ProductCard";

export default function Home() {
  return (
    <main className="w-screen h-main flex justify-center items-center gap-8">
      <ProductCard product="bolo de morango" img_url="https://assets.unileversolutions.com/recipes-v2/164246.jpg" />
      <div className="h-[350px] flex flex-col gap- justify-between">
        <ProductBadge icon={0} content="total vendido:" value={0} />
        <ProductBadge icon={1} content="mesa maior consumo:" value={0} />
        <ProductBadge icon={2} content="total mesas atendidas:" value={0} />
      </div>
    </main>
  );
}
