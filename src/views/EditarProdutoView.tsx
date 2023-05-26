import Link from "next/link";
import { Produto } from "@/types/Produto";
import { Form } from "@/components/Form/Form";
import { Input } from "@/components/Form/Input";
import { Title } from "@/components/Form/Title";
import { TextArea } from "@/components/Form/TextArea";
import { SubmitButton } from "@/components/Form/Button";
import { useContext, useEffect, useState } from "react";
import { PhotoViewer } from "@/components/Form/PhotoViewer";
import { ProdutoContext, ProdutoContextType } from "@/context/ProductContext";
import { useRouter } from "next/router";
import { TOKEN, validateForm } from "@/utils/formUtils";
import Swal from "sweetalert2";
import { RadioGroup } from "@/components/Form/RadioGroup";
import { redirect } from "next/navigation";

export function EditarProdutoView() {
  const router = useRouter();
  const { idProduto } = router.query;
  const parsedIdProduto = typeof idProduto === "string" ? parseInt(idProduto, 10) : Number(idProduto);

  const { getProdutoByID, updateProduto } = useContext<ProdutoContextType>(ProdutoContext);
  const [loader, setLoader] = useState<boolean>(false);
  const [produto, setProduto] = useState<any>({
    nome: "",
    foto: "",
    preco: 0,
    descricao: "",
    idCategoria: 1,
    token: TOKEN,
  });

  useEffect(() => {
    const load = async () => {
      const data = await getProdutoByID(parsedIdProduto);
      setProduto(data);
    };

    load();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const treatedValue = typeof event.target.value == "number" ? Number(value.toString().replace(",", ".")) : value;
    setProduto((previousData: Produto) => ({ ...previousData, [name]: treatedValue }));
  };

  const handleRadioChange = async (value: number) => {
    setProduto((previousData: Produto) => ({ ...previousData, idCategoria: value }));
  };

  const handleSaveChangesProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoader(true);

    if (!validateForm(produto)) {
      Swal.fire({
        icon: "info",
        text: "Preencha todos os campos!",
        timer: 3500,
      });
      setLoader(false);
    } else {
      try {
        await updateProduto(parsedIdProduto, produto);
        Swal.fire({
          icon: "success",
          title: "Alterações Salvas com Sucesso!",
          timer: 3500,
        });
        setLoader(false);
        redirect("/produtos");
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Ocorreu um Erro",
          text: "Ocorreu algum erro ao tentar salvar as informações do produto",
          timer: 3500,
        });
        setLoader(false);
      }
    }
  };

  return (
    <main className="w-screen h-main flex justify-center items-center">
      <Form onSubmit={handleSaveChangesProduct}>
        {produto && (
          <>
            <Title text={`Editar informações do produto: ${produto.nome}`} />
            <Input
              label="Nome do Produto:"
              placeholder="Digite aqui o novo nome do produto"
              name="nome"
              type="text"
              value={produto.nome}
              onChange={handleInputChange}
            />
          </>
        )}

        <div className="flex flex-row justify-between items-center gap-8 mt-4">
          <TextArea
            label="Descrição do produto:"
            name="descricao"
            placeholder="Digite aqui a descrição do produto"
            value={produto.descricao}
            onChange={handleInputChange}
          />

          <RadioGroup label="Selecione o tipo:" onChangeState={handleRadioChange} />
        </div>

        <Input
          label="Valor do produto:"
          type="number"
          name="preco"
          placeholder="Digite aqui o valor do produto, ex.: 9,90"
          value={produto.preco}
        />

        <Input
          label="URL da Imagem:"
          type="text"
          name="foto"
          placeholder="Digite aqui o URL da imagem do produto"
          value={produto.foto}
          onChange={handleInputChange}
        />

        <PhotoViewer img_url={produto.foto} />

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
