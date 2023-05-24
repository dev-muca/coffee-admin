import { ProductRouterSchema } from "@/schemas/ProductSchema";
import { EditarProdutoView } from "@/views/EditarProdutoView";
import { useRouter } from "next/router";

export default function Cadastrar() {
  const router = useRouter();
  const idProduto = Number(router.query.idProduto);

  return <EditarProdutoView idProduto={idProduto} />;
}
