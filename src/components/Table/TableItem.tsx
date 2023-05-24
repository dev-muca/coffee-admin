import { ProductListDataSchema } from "@/schemas/ProductSchema";
import Link from "next/link";

type Pros = {
  id: number;
  name: string;
  description: string;
  value: number;
};

export function TableItem({ idProduto, nome, preco, descricao, idCategoria }: ProductListDataSchema) {
  function formatToBRL(valor: number): string {
    const format = {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    };

    const formatedValue = valor.toLocaleString("pt-BR", format);

    return formatedValue;
  }

  return (
    <tr className="bg-zinc-100 even:bg-white border-b">
      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap text-center font-medium">{idProduto}</td>
      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap text-left">{nome}</td>
      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap text-left">{descricao}</td>
      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap text-center">{formatToBRL(preco)}</td>
      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap text-center">
        {idCategoria == 1 ? "Bolo" : "Café"}
      </td>
      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap flex flex-row gap-4 justify-around">
        <Link href={`/editar?idProduto=${idProduto}`} className="hover:underline flex items-center gap-2">
          Editar
        </Link>
        <Link href="#" className="hover:text-red-600 hover:underline">
          Deletar
        </Link>
      </td>
    </tr>
  );
}
