import { Form } from "@/components/Form/Form";
import { Input } from "@/components/Form/Input";

export function CadastrarProdutoview() {
  return (
    <main className="w-screen h-main flex justify-center items-center">
      <Form title="editar informações do produto">
        <Input label="Nome do produto:" type="text" placeholder="Digite aqui o nome do produto" />
      </Form>
    </main>
  );
}
