import { ProductBadge } from "@/components/Dashboard/ProductBadge";
import { ProductCard } from "@/components/Dashboard/ProductCard";
import { MdAttachMoney } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { BiDish } from "react-icons/bi";

export default function Home() {
  return (
    <main className="w-screen h-[600px] md:h-[800px] flex justify-center items-center">
      <div className="w-full px-8 flex flex-col justify-around items-center gap-8">
        <ProductBadge text="Total de vendas (diária):" value={0} monetary>
          <MdAttachMoney size={50} color="#FFF" />
        </ProductBadge>
        <ProductBadge text="Mesa com maior consumo:" value={0}>
          <GiKnifeFork size={50} color="#FFF" />
        </ProductBadge>
        <ProductBadge text="Total mesas atendidas:" value={0}>
          <BiDish size={50} color="#FFF" />
        </ProductBadge>
      </div>
    </main>
  );
}
