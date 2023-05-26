import { ProductBadge } from "@/components/Product/ProductBadge";
import { ProductCard } from "@/components/Product/ProductCard";

export function HomeView() {
  return (
    <main className="w-screen h-main flex justify-center items-center">
      <div className="w-full h-[400px] flex justify-center items-center gap-8">
        <ProductCard product="bolo de chocolate" img_url="https://assets.unileversolutions.com/recipes-v2/164246.jpg" />
        <div className="h-[400px] flex flex-col justify-around">
          <ProductBadge icon={0} content="total vendido:" value={0} />
          <ProductBadge icon={1} content="mesa maior consumo:" value={0} />
          <ProductBadge icon={2} content="total mesas atendidas:" value={0} />
        </div>
      </div>
    </main>
  );
}
