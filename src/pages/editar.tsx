import { Area } from "@/components/Form/Area";
import { Button } from "@/components/Form/Button";
import { ButtonBack } from "@/components/Form/ButtonBack";
import { Dropdown } from "@/components/Form/Dropdown";
import { Input } from "@/components/Form/Input";
import { Preview } from "@/components/Form/Preview";
import { Container } from "@/components/Layout/Container";
import { API, TOKEN } from "@/services/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

type ProdutoProps = {
  idProduto?: number;
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  idCategoria: number;
  token: string;
};

export default function Editar({ props }: any) {
  //
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let idProduto = Number(params.get("idProduto"));

    const getProductData = async (idProduto: number) => {
      const data = await API.getProdutoById(idProduto);
      setProduto(data);
    };

    getProductData(idProduto);
  }, []);

  const [loader, setLoader] = useState<boolean>(false);

  const [produto, setProduto] = useState<ProdutoProps>({
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
    setProduto((previousData: ProdutoProps) => ({ ...previousData, [name]: treatedValue }));
  };

  const handleOptionSelect = (value: number) => {
    setProduto((previousData: ProdutoProps) => ({ ...previousData, idCategoria: value }));
  };

  const validateAllFields = () => {
    const { nome, descricao, preco, foto } = produto;

    if (!nome || !descricao || !preco || !foto) {
      return false;
    }

    return true;
  };

  const clearAllFields = () => {
    setProduto({
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

    const modified = await API.updateProduto(produto);

    if (modified !== 204) {
      Swal.fire({
        icon: "error",
        title: "Erro ao salvar alterações do produto, tente novamente",
      });
    }

    Swal.fire({
      icon: "success",
      title: "Produto alterado com sucesso!",
      timer: 3500,
    });

    clearAllFields();
    setLoader(false);
    router.push("/produtos");
  };

  return (
    <Container className="mt-16">
      <h1 className="border-b border-black pb-1 mb-10 uppercase text-2xl font-medium">Editar Produto</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
        <Input
          label="Nome do produto:"
          type="text"
          name="nome"
          placeholder="Informe aqui o nome do produto"
          value={produto.nome}
          onChange={handleInputChange}
        />

        <Area
          label="Descrição do produto:"
          name="descricao"
          placeholder="Informe aqui uma descrição para o produto"
          value={produto.descricao}
          onChange={handleInputChange}
        />

        <section className="flex flex-row gap-4 items-center">
          <Dropdown
            label="Categoria:"
            options={[
              { name: "Bolo", value: 1 },
              { name: "Café", value: 2 },
            ]}
            value={produto.idCategoria}
            onOptionSelect={handleOptionSelect}
          />

          <Input
            label="Preço:"
            type="number"
            name="preco"
            placeholder="Informe aqui o valor (R$)"
            value={produto.preco}
            onChange={handleInputChange}
          />
        </section>

        <Input
          label="URL da Imagem:"
          type="text"
          name="foto"
          placeholder="Forneça aqui uma URL de imagem do produto"
          value={produto.foto}
          onChange={handleInputChange}
        />
        <Preview image={produto.foto} />

        <section className="w-full flex flex-row-reverse justify-between gap-8 pb-8">
          <Button type="submit" loader={loader} className="bg-emerald-500 text-white hover:bg-emerald-400">
            Salvar
          </Button>

          <ButtonBack navigate="/produtos" className="hover:bg-zinc-50 text-zinc-500 border">
            Voltar
          </ButtonBack>
        </section>
      </form>
    </Container>
  );
}
