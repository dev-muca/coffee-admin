import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Form } from "@/components/Form/Form";
import { Input } from "@/components/Form/Input";
import { TextArea } from "@/components/Form/TextArea";
import { ClearButton, SubmitButton } from "@/components/Form/Button";
import { PhotoViewer } from "@/components/Form/PhotoViewer";
import { ProdutoContext, ProdutoContextType } from "@/context/ProductContext";
import { Produto } from "@/types/Produto";

export function EditarProdutoView(idProduto: number) {
  const [loader, setLoader] = useState<boolean>(false);
  const { produto, getProdutoByID } = useContext<ProdutoContextType>(ProdutoContext);

  const [produtoEditado, setProdutoEditado] = useState<Produto | any>({
    idProduto: produto ? produto[0].idProduto : undefined,
    nome: produto ? produto[0].nome : undefined,
    descricao: produto ? produto[0].descricao : undefined,
    preco: produto ? produto[0].preco : undefined,
    foto: produto ? produto[0].foto : undefined,
  });

  useEffect(() => {
    const load = async () => {
      await getProdutoByID(idProduto);
    };

    load();
  }, [idProduto]);

  return (
    <main className="w-screen h-main flex justify-center items-center">
      <Form title="editar informações do produto">
        <Input
          label="Nome do Produto:"
          placeholder="Digite aqui o novo nome do produto"
          name="nome"
          type="text"
          value={produto ? produto[0].nome : undefined}
        />

        <TextArea
          label="Descrição do produto:"
          name="descricao"
          placeholder="Digite aqui a descrição do produto"
          value={produto ? produto[0].descricao : undefined}
        />

        <Input
          label="Valor do produto:"
          type="number"
          name="preco"
          placeholder="Digite aqui o valor do produto, ex.: 9,90"
          value={produto ? produto[0].preco : undefined}
        />
        <Input
          label="URL da Imagem:"
          type="text"
          name="foto"
          placeholder="Digite aqui o URL da imagem do produto"
          value={produto ? produto[0].foto : undefined}
        />
        <PhotoViewer img_url={produto ? produto[0].foto : undefined} />

        <div className="w-full flex justify-between items-center">
          <Link href="/produtos">Voltar</Link>
          <div className="flex gap-8 items-center">
            <SubmitButton type="submit" loader={loader}>
              Salvar
            </SubmitButton>
          </div>
        </div>
      </Form>
    </main>
  );
}
