import { SubmitButton, ClearButton } from "@/components/Form/Button";
import { Form } from "@/components/Form/Form";
import { Input } from "@/components/Form/Input";
import { PhotoViewer } from "@/components/Form/PhotoViewer";
import { RadioGroup } from "@/components/Form/RadioGroup";
import { TextArea } from "@/components/Form/TextArea";
import { useState } from "react";
import { objectToFormUrlEncoded, TOKEN } from "../utils/formUtils";
import Link from "next/link";
import API from "../services/api";
import Swal from "sweetalert2";
import { ProductFormDataSchema } from "@/schemas/ProductSchema";

export function CadastrarProdutoview() {
  const [formData, setFormData] = useState<ProductFormDataSchema>({
    nome: "",
    foto: "",
    preco: 0,
    descricao: "",
    idCategoria: 1,
    token: TOKEN,
  });

  const [loader, setLoader] = useState(false);

  function clearForm() {
    setFormData({
      nome: "",
      foto: "",
      preco: 0,
      descricao: "",
      idCategoria: 1,
      token: TOKEN,
    });
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    const monetaryValue = event.target.value;
    typeof value == "number" ? Number(monetaryValue.toString().replace(",", ".")) : value;

    setFormData((previousData) => ({ ...previousData, [name]: value }));
  }

  function handleRadioChange(value: number) {
    setFormData((previousData) => ({ ...previousData, idCategoria: value }));
  }

  function validateFormData() {
    const { nome, descricao, preco, foto } = formData;

    if (!nome || !descricao || !preco || !foto) {
      Swal.fire({
        icon: "warning",
        title: "Informações Ausentes",
        text: "Preencha todos os campos!",
        timer: 3500,
      });

      return false;
    }

    return true;
  }

  async function handleSubmitForm(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setLoader(true);

    const formIsValid = validateFormData();

    if (!formIsValid) {
      setLoader(false);
    }

    if (formIsValid) {
      const formEncodedData = objectToFormUrlEncoded(formData);

      try {
        const response = await API.post("/produto.php", formEncodedData);

        if (response.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Produto Cadastrado com Sucesso!",
            timer: 3500,
          });

          clearForm();
          setLoader(false);
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Ocorreu um erro",
          text: "Houve algum erro a tentar cadastrar o produto, contate o suporte!",
          timer: 3500,
        });
      }
    }
  }

  return (
    <main className="mt-32">
      <Form title="cadastrar novo produto no cardápio" onSubmit={handleSubmitForm}>
        <Input
          label="Nome do produto:"
          type="text"
          name="nome"
          placeholder="Digite aqui o nome do produto"
          value={formData.nome}
          onChange={handleInputChange}
        />
        <div className="flex flex-row justify-between items-center gap-8 mt-4">
          <TextArea
            label="Descrição do produto:"
            name="descricao"
            placeholder="Digite aqui a descrição do produto"
            value={formData.descricao}
            onChange={handleInputChange}
          />
          <RadioGroup label="Selecione o tipo:" onChangeState={handleRadioChange} />
        </div>
        <Input
          label="Valor do produto:"
          type="number"
          name="preco"
          placeholder="Digite aqui o valor do produto, ex.: 9,90"
          value={formData.preco}
          onChange={handleInputChange}
        />
        <Input
          label="URL da Imagem:"
          type="text"
          name="foto"
          placeholder="Digite aqui o URL da imagem do produto"
          value={formData.foto}
          onChange={handleInputChange}
        />
        <PhotoViewer img_url={formData.foto} />
        <div className="w-full flex justify-between items-center">
          <Link href="/">Voltar</Link>
          <div className="flex gap-8 items-center">
            <ClearButton text="Limpar campos" onClick={clearForm} />
            <SubmitButton type="submit" loader={loader}>
              Cadastrar
            </SubmitButton>
          </div>
        </div>
      </Form>
    </main>
  );
}
