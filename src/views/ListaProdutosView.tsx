import { Produto } from "@/types/Produto";
import { useContext, useEffect } from "react";
import { Title } from "@/components/Form/Title";
import { Wrapper } from "@/components/Table/Wrapper";
import { TableItem } from "@/components/Table/TableItem";
import { TableHead } from "@/components/Table/TableHead";
import { ProdutoContext, ProdutoContextType } from "@/context/ProductContext";

export function ListaProdutosView() {
  const { produto, getAllProdutos } = useContext<ProdutoContextType>(ProdutoContext);

  useEffect(() => {
    const load = async () => {
      await getAllProdutos();
    };

    load();
  }, []);

  return (
    <main className="my-16 w-4/5 mx-auto">
      <Title text="Cadastrar novo produto no cardápio" />
      <Wrapper>
        <TableHead />
        <tbody>
          {produto ? (
            produto.map((produto: Produto) => (
              <TableItem
                key={produto.idProduto}
                idProduto={produto.idProduto}
                nome={produto.nome}
                preco={produto.preco}
                descricao={produto.descricao}
                idCategoria={produto.idCategoria}
              />
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
