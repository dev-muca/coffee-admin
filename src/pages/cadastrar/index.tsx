import Link from "next/link";
import Swal from "sweetalert2";
import { TOKEN, validateForm } from "@/utils/formUtils";
import { Produto } from "@/types/Produto";
import { useContext, useState } from "react";
import { Form } from "@/components/Form/Form";
import { Input } from "@/components/Form/Input";
import { Title } from "@/components/Form/Title";
import { TextArea } from "@/components/Form/TextArea";
import { RadioGroup } from "@/components/Form/RadioGroup";
import { ProdutoContext } from "@/context/ProductContext";
import { PhotoViewer } from "@/components/Form/PhotoViewer";
import { SubmitButton, ClearButton } from "@/components/Form/Button";

export default function Cadastrar() {
  const { createProduto } = useContext(ProdutoContext);

  const [produto, setProduto] = useState<Produto>({
    nome: "",
    foto: "",
    preco: 0,
    descricao: "",
    idCategoria: 1,
    token: TOKEN,
  });

  const [loader, setLoader] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const treatedValue = typeof event.target.value == "number" ? Number(value.toString().replace(",", ".")) : value;
    setProduto((previousData) => ({ ...previousData, [name]: treatedValue }));
  };

  const handleRadioChange = async (value: number) => {
    setProduto((previousData) => ({ ...previousData, idCategoria: value }));
  };

  const clearForm = () => {
    setProduto({ nome: "", foto: "", preco: 0, descricao: "", idCategoria: 1, token: TOKEN });
  };

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoader(true);

    if (!validateForm(produto)) {
      Swal.fire({
        icon: "info",
        title: "Preencha todos os campos!",
        timer: 3500,
      });

      setLoader(false);
      return;
    }

    try {
      const statusCode = await createProduto(produto);

      if (statusCode === 201) {
        Swal.fire({
          icon: "success",
          title: "Produto cadastrado com sucesso!",
          timer: 3500,
        });
      }

      setLoader(false);
      clearForm();
    } catch (err) {
      console.log(err);

      Swal.fire({
        icon: "error",
        title: "Ocorreu um erro",
        text: "Parece que ocorreu algum erro ao tentar cadstrar o produto",
        timer: 3500,
      });
    }

    setLoader(false);
  };

  return (
    <main className="mx-auto my-16">
      <Form onSubmit={handleSubmitForm}>
        <Title text="Cadastrar novo produto no cardápio" />

        <Input
          label="Nome do produto:"
          type="text"
          name="nome"
          placeholder="Digite aqui o nome do produto"
          value={produto.nome}
          onChange={handleInputChange}
        />

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
          onChange={handleInputChange}
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
          <Link href="/" className="hover:underline">
            Voltar
          </Link>

          <div className="flex gap-8 items-center">
            <ClearButton text="Limpar campos" onClick={clearForm} />

            <SubmitButton type="button" loader={loader}>
              Cadastrar
            </SubmitButton>
          </div>
        </div>
      </Form>
    </main>
  );
}
