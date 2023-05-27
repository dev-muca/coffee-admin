import Link from "next/link";
import { Produto } from "@/types/Produto";
import { useContext, useEffect, useState, useCallback } from "react";
import { Title } from "@/components/Form/Title";
import { Wrapper } from "@/components/Table/Wrapper";
import { TableHead } from "@/components/Table/TableHead";
import { ProdutoContext, ProdutoContextType } from "@/context/ProductContext";
import { formatToBRL } from "@/utils/formUtils";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

export default function Produtos() {
  const [produto, setProduto] = useState<any>();
  const { getAllProdutos, deleteProdutoByID } = useContext<ProdutoContextType>(ProdutoContext);

  useEffect(() => {
    const load = async () => {
      const data = await getAllProdutos();
      setProduto(data);
    };
    load();
  }, []);

  const handleDeleteProduto = async (idProduto: number) => {
    try {
      Swal.fire({
        icon: "warning",
        title: "Tem certeza?",
        text: `Você está prestes a deletar este produto, tem certeza?`,
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Sim, quero deletar",
        confirmButtonColor: "#ff0000",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteProdutoByID(idProduto);
          Swal.fire({
            icon: "success",
            title: "Produto Deletado!",
          });
          setTimeout(() => {
            window.location.href = window.location.href;
          }, 500);
        }
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Ocorreu um erro inesperado",
        text: `${err}`,
      });
    }
  };

  return (
    <main className="my-16 w-4/5 mx-auto">
      <Title text="Produtos disponíveis no cardápio" />
      <Wrapper>
        <TableHead />
        <tbody>
          {produto ? (
            produto.map((produto: Produto) => (
              <tr key={produto.idProduto} className="bg-zinc-100 even:bg-white border-b">
                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap text-center font-medium">
                  {produto.idProduto}
                </td>
                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap text-left">{produto.nome}</td>
                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap text-left">{produto.descricao}</td>
                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap text-lefts">
                  {formatToBRL(produto.preco)}
                </td>
                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap text-center">
                  {produto.idCategoria == 1 ? "Bolo" : "Café"}
                </td>
                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap flex flex-row gap-4 justify-evenly items-center">
                  <Link
                    href={`/editar?idProduto=${produto.idProduto}`}
                    className="hover:underline flex items-center gap-2"
                  >
                    <FiEdit size={18} color="#000" className="w-8 h-8 p-1" />
                  </Link>
                  <button
                    className="hover:text-red-600 hover:underline"
                    onClick={() => handleDeleteProduto(Number(produto.idProduto))}
                  >
                    <MdDeleteForever size={18} color="#fff" className="rounded-full bg-red-700 w-8 h-8 p-1" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="text-center py-4" colSpan={6}>
                Nenhum produto cadastrado!
              </td>
            </tr>
          )}
        </tbody>
      </Wrapper>
    </main>
  );
}
