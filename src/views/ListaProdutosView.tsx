import { Form } from "@/components/Form/Form";
import { TableHead } from "@/components/Table/TableHead";
import { TableItem } from "@/components/Table/TableItem";
import { Wrapper } from "@/components/Table/Wrapper";
import { ProductContext } from "@/context/ProductContext";
import { useContext, useEffect } from "react";
import { ProductListDataSchema } from "@/schemas/ProductSchema";

export function ListaProdutosView() {
  const { getProdutos, produtos, setProdutos }: any = useContext(ProductContext);

  useEffect(() => {
    getProdutos();
  }, []);

  useEffect(() => {
    getProdutos();
  }, [produtos]);

  return (
    <main className="w-screen h-main flex justify-center items-center">
      <Form title="Produtos disponíveis no cardápio">
        <Wrapper>
          <TableHead headers={["#", "Produto", "Descrição", "Preço", "Categoria", "Ações"]} />
          <tbody>
            {produtos.map((produto: ProductListDataSchema) => (
              <TableItem
                key={produto.idProduto}
                idProduto={produto.idProduto}
                nome={produto.nome}
                preco={produto.preco}
                descricao={produto.descricao}
                idCategoria={produto.idCategoria}
              />
            ))}
          </tbody>
        </Wrapper>
      </Form>
    </main>
  );
}
