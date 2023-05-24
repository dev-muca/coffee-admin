import { Button } from "@/components/Form/Button";
import { Form } from "@/components/Form/Form";
import { Input } from "@/components/Form/Input";
import { PhotoViewer } from "@/components/Form/PhotoViewer";
import { RadioGroup } from "@/components/Form/RadioGroup";
import { TextArea } from "@/components/Form/TextArea";

export function CadastrarProdutoview() {
  return (
    <main className="w-screen h-main flex justify-center items-center">
      <Form title="cadastrar novo produto no cardápio">
        <Input label="Nome do produto:" type="text" placeholder="Digite aqui o nome do produto" />
        <div className="flex flex-row justify-between items-center gap-8 mt-4">
          <TextArea label="Descrição do produto:" placeholder="Digite aqui a descrição do produto" />
          <RadioGroup label="Selecione o tipo:" />
        </div>
        <Input label="Valor do produto:" type="number" placeholder="Digite aqui o valor do produto, ex.: 9,90" />
        <Input label="URL da Imagem:" type="text" placeholder="Digite aqui o URL da imagem do produto" />
        <PhotoViewer img_url="" />
        <Button>Limpar campos</Button>
        <Button color="red">Voltar</Button>
        <Button color="green">Cadastrar</Button>
      </Form>
    </main>
  );
}
