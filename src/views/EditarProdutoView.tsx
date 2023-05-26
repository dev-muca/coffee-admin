import Link from "next/link";
import { Produto } from "@/types/Produto";
import { Form } from "@/components/Form/Form";
import { Input } from "@/components/Form/Input";
import { Title } from "@/components/Form/Title";
import { TextArea } from "@/components/Form/TextArea";
import { SubmitButton } from "@/components/Form/Button";
import { useContext, useEffect, useState, useMemo } from "react";
import { PhotoViewer } from "@/components/Form/PhotoViewer";
import { ProdutoContext, ProdutoContextType } from "@/context/ProductContext";
import { useRouter } from "next/router";

export function EditarProdutoView() {
  const router = useRouter();
  const idProduto = router.query.idProduto;

  const [loader, setLoader] = useState<boolean>(false);
  const { produto, getProdutoByID } = useContext<ProdutoContextType>(ProdutoContext);

  useMemo(() => {
    const load = async () => {
      await getProdutoByID(Number(idProduto));
    };

    console.log(produto);

    load();
  }, []);

  return (
    <main className="w-screen h-main flex justify-center items-center">
      <Form>
        {produto && (
          <>
            <Title text={`Editar informações do produto: ${produto.nome}`} />
            <Input
              label="Nome do Produto:"
              placeholder="Digite aqui o novo nome do produto"
              name="nome"
              type="text"
              value={produto.nome}
            />
          </>
        )}

        {/* <TextArea
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
        </div> */}
      </Form>
    </main>
  );
}
