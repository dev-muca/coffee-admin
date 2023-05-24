import { Form } from "@/components/Form/Form";
import { Input } from "@/components/Form/Input";
import { ProductContext } from "@/context/ProductContext";
import { ProductRouterSchema } from "@/schemas/ProductSchema";
import { useContext, useEffect } from "react";

export function EditarProdutoView({ idProduto }: ProductRouterSchema) {
  const {}: any = useContext(ProductContext);

  return (
    <main className="w-screen h-main flex justify-center items-center">
      <Form title="editar informações do produto">
        <Input
          label="Nome do Produto:"
          placeholder="Digite aqui o novo nome do produto"
          name="nome"
          type="text"
          value={0}
        />
      </Form>
    </main>
  );
}
