import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
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
      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap flex flex-row gap-4 justify-evenly items-center">
        <Link href={`/editar?idProduto=${idProduto}`} className="hover:underline flex items-center gap-2">
          <FiEdit size={18} color="#000" className="w-8 h-8 p-1" />
        </Link>
        <Link href="#" className="hover:text-red-600 hover:underline">
          <MdDeleteForever size={18} color="#fff" className="rounded-full bg-red-700 w-8 h-8 p-1" />
        </Link>
      </td>
    </tr>
  );
}
