import { useContext, useEffect } from "react";
import { Form } from "@/components/Form/Form";
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
    <main className="w-screen flex justify-center items-start mt-32">
      <Form title="Produtos disponíveis no cardápio">
        <Wrapper>
          <TableHead headers={["#", "Produto", "Descrição", "Preço", "Categoria", "Ações"]} />
          <tbody>
            {produto ? (
              produto.map((produto: any) => (
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
      </Form>
    </main>
  );
}
