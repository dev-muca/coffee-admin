import { Area } from "@/components/Form/Area";
import { Button } from "@/components/Form/Button";
import { ButtonBack } from "@/components/Form/ButtonBack";
import { Dropdown } from "@/components/Form/Dropdown";
import { Input } from "@/components/Form/Input";
import { Preview } from "@/components/Form/Preview";
import { Container } from "@/components/Layout/Container";
import { API, TOKEN } from "@/services/api";
import { create } from "domain";
import { useState } from "react";
import Swal from "sweetalert2";

type ProdutoProps = {
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  idCategoria: number;
  token: string;
};

export default function Novo() {
  //
  const [loader, setLoader] = useState<boolean>(false);

  const [novoProduto, setNovoProduto] = useState<ProdutoProps>({
    nome: "",
    descricao: "",
    foto: "",
    preco: 0,
    idCategoria: 1,
    token: TOKEN,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const treatedValue = typeof event.target.value == "number" ? Number(value.toString().replace(",", ".")) : value;
    setNovoProduto((previousData: ProdutoProps) => ({ ...previousData, [name]: treatedValue }));
  };

  const handleOptionSelect = (value: number) => {
    setNovoProduto((previousData: ProdutoProps) => ({ ...previousData, idCategoria: value }));
  };

  const validateAllFields = () => {
    const { nome, descricao, preco, foto } = novoProduto;

    if (!nome || !descricao || !preco || !foto) {
      return false;
    }

    return true;
  };

  const clearAllFields = () => {
    setNovoProduto({
      nome: "",
      descricao: "",
      foto: "",
      preco: 0,
      idCategoria: 1,
      token: TOKEN,
    });
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);

    if (!validateAllFields()) {
      Swal.fire({
        icon: "info",
        title: "Preencha todos os campos!",
        confirmButtonColor: "#08a571",
      });
      setLoader(false);
      return;
    }

    const created = await API.createProduto(novoProduto);

    if (created !== 201) {
      Swal.fire({
        icon: "error",
        title: "Erro ao cadastrar produto, tente novamente",
      });
    }

    Swal.fire({
      icon: "success",
      title: "Produto cadastrado com sucesso!",
    });

    clearAllFields();
    setLoader(false);
  };

  return (
    <Container className="mt-16">
      <h1 className="border-b border-black pb-1 mb-10 uppercase text-2xl font-medium">Cadastrar Novo Produto</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
        <Input
          label="Nome do produto:"
          type="text"
          name="nome"
          placeholder="Informe aqui o nome do produto"
          value={novoProduto.nome}
          onChange={handleInputChange}
        />

        <Area
          label="Descrição do produto:"
          name="descricao"
          placeholder="Informe aqui uma descrição para o produto"
          value={novoProduto.descricao}
          onChange={handleInputChange}
        />

        <section className="flex flex-row gap-4 items-center">
          <Dropdown
            label="Categoria:"
            options={[
              { name: "Bolo", value: 1 },
              { name: "Café", value: 2 },
            ]}
            value={novoProduto.idCategoria}
            onOptionSelect={handleOptionSelect}
          />

          <Input
            label="Preço:"
            type="number"
            name="preco"
            placeholder="Informe aqui o valor (R$)"
            value={novoProduto.preco}
            onChange={handleInputChange}
          />
        </section>

        <Input
          label="URL da Imagem:"
          type="text"
          name="foto"
          placeholder="Forneça aqui uma URL de imagem do produto"
          value={novoProduto.foto}
          onChange={handleInputChange}
        />
        <Preview image={novoProduto.foto} />

        <section className="w-full flex flex-row-reverse justify-between gap-8 pb-8">
          <Button type="submit" loader={loader} className="bg-emerald-500 text-white hover:bg-emerald-400">
            Cadastrar
          </Button>

          <ButtonBack navigate="/" className="hover:bg-zinc-50 text-zinc-500 border">
            Voltar
          </ButtonBack>
        </section>
      </form>
    </Container>
  );
}
