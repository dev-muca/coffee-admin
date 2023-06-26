import { Container } from "@/components/Layout/Container";
import { API } from "@/services/api";
import { formatToBRL } from "@/utilities/utilities";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Produto } from "@/components/interfaces/Produto";

type ProdutoProps = {
  idProduto: number;
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  idCategoria: number;
};

export default function Produtos() {
  //
  const router = useRouter();

  const [produtos, setProdutos] = useState<ProdutoProps[]>([]);
  const [filter, setFilter] = useState<number>(0);

  console.log("Renderizou!");

  useEffect(() => {
    const getAllProdutos = async () => {
      const data = await API.getAllProdutos();
      setProdutos(data);
    };

    getAllProdutos();
  }, []);

  const filteredProducts =
    filter !== 0 && produtos.length > 0 ? produtos.filter((produto) => produto.idCategoria == filter) : [];

  const editProduto = (idProduto: number) => {
    router.push(`/editar?idProduto=${idProduto}`);
  };

  const deleteProduto = async (idProduto: number) => {
    Swal.fire({
      icon: "question",
      title: "Tem certeza?",
      html: "Você está prestes a deletar este produto <strong>PARA SEMPRE</strong>, tem certeza que deseja fazer isso? 🤔",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Sim, quero deletar",
      cancelButtonText: "Não, cancelar",
      confirmButtonColor: "#ab3939",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleted = await API.deleteProduto(idProduto);
        const produtosRestantes = produtos.filter((produto) => produto.idProduto !== idProduto);
        setProdutos(produtosRestantes);

        if (deleted !== 204) {
          Swal.fire({
            icon: "error",
            title: "Erro ao deletar produto, tente novamente",
          });
        }

        Swal.fire({
          icon: "success",
          title: "Produto deletado!",
        });
      }
    });
  };

  return (
    <Container className="mt-16">
      <h1 className="border-b border-black pb-1 mb-10 uppercase text-2xl font-medium">Lista de Produtos</h1>

      <div className="w-fit flex flex-row gap-4 my-4">
        <label>Filtrar por:</label>
        <button
          onClick={() => setFilter(0)}
          className={`hover:border-black ${
            filter == 0 ? "border-b-red-900 border-b-2" : "border-b border-transparent"
          }`}
        >
          😋 Todos
        </button>
        <button
          onClick={() => setFilter(1)}
          className={`hover:border-black ${
            filter == 1 ? "border-b-red-900 border-b-2" : "border-b border-transparent"
          }`}
        >
          🍰 Bolos
        </button>
        <button
          onClick={() => setFilter(2)}
          className={`hover:border-black ${
            filter == 2 ? "border-b-red-900 border-b-2" : "border-b border-transparent"
          }`}
        >
          ☕ Cafés
        </button>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Produto
              </th>
              <th scope="col" className="hidden md:table-cell px-6 py-3">
                Categoria
              </th>
              <th scope="col" className="hidden md:table-cell px-6 py-3">
                Preço
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {filter != 0 ? (
              filteredProducts.length > 0 ? (
                filteredProducts.map((produto: ProdutoProps) => (
                  <tr key={produto.idProduto} className="bg-white border-b">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{produto.nome}</td>
                    <td className="hidden md:table-cell px-6 py-4">{produto.idCategoria == 1 ? "Bolo" : "Café"}</td>
                    <td className="hidden md:table-cell px-6 py-4">{formatToBRL(produto.preco)}</td>
                    <td className="px-6 py-4 flex flex-row justify-between md:justify-around gap-2">
                      <button
                        onClick={() => editProduto(produto.idProduto)}
                        className="font-medium text-blue-400 00 hover:underline"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => deleteProduto(produto.idProduto)}
                        className="font-medium text-red-600 00 hover:underline"
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <td colSpan={4} className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Nenhum produto cadastrado 😕
                </td>
              )
            ) : produtos.length > 0 ? (
              produtos.map((produto: ProdutoProps) => (
                <tr key={produto.idProduto} className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{produto.nome}</td>
                  <td className="hidden md:table-cell px-6 py-4">{produto.idCategoria == 1 ? "Bolo" : "Café"}</td>
                  <td className="hidden md:table-cell px-6 py-4">{formatToBRL(produto.preco)}</td>
                  <td className="px-6 py-4 flex flex-row justify-between md:justify-around gap-2">
                    <button
                      onClick={() => editProduto(produto.idProduto)}
                      className="font-medium text-blue-400 00 hover:underline"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => deleteProduto(produto.idProduto)}
                      className="font-medium text-red-600 00 hover:underline"
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <td colSpan={4} className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Nenhum produto cadastrado 😕
              </td>
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
