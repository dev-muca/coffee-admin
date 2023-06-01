import { Produto } from "@/components/interfaces/Produto";
import { objectToFormUrlEncoded } from "@/utilities/utilities";
import axios from "axios";

export const TOKEN = "04C78878FC183F4E780E99CA26CE975D46E9A801858C95DB7A484DBED539839C";

const apiBase = axios.create({
  baseURL: "https://www.fateclins.edu.br/felipeMaciel/api/macieulsCoffee",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});

type ApiProps = {
  getAllProdutos: () => Promise<[]>;
  getProdutoById: (idProduto: number) => Promise<Produto>;
  createProduto: (produto: Produto) => Promise<number | object>;
  updateProduto: (produto: Produto) => Promise<number | object>;
  deleteProduto: (idProduto: number) => Promise<number | object>;
};

export const API: ApiProps = {
  getAllProdutos: async () => {
    try {
      const response = await apiBase.get("/produtos.php", {
        params: {
          token: TOKEN,
        },
      });

      return response.data;
    } catch (err) {
      return { message: "Erro ao obter informção dos produtos", error: err };
    }
  },

  getProdutoById: async (idProduto: number) => {
    try {
      const response = await apiBase.get("/produto.php", { params: { token: TOKEN, idProduto: idProduto } });
      return response.data;
    } catch (err) {
      return { message: "Erro ao obter informção do produto", error: err };
    }
  },

  createProduto: async (produto: Produto) => {
    const data = objectToFormUrlEncoded(produto);

    try {
      const response = await apiBase.post("/produto.php", data);
      return response.status;
    } catch (err) {
      return { message: "Erro ao tentar cadastrar do produto", error: err };
    }
  },

  updateProduto: async (produto: Produto) => {
    const dataToEncoded = {
      token: TOKEN,
      idProduto: produto.idProduto,
      produto: `{"nome": "${produto.nome}", "preco" : ${produto.preco}, "idCategoria" : ${produto.idCategoria}, "descricao": "${produto.descricao}", "foto": "${produto.foto}"}`,
    };

    const data = objectToFormUrlEncoded(dataToEncoded);

    try {
      const response = await apiBase.post("/produto.php", data, { params: { method: "PUT" } });
      return response.status;
    } catch (err) {
      return { message: "Erro ao tentar salvar alterações do produto", error: err };
    }
  },

  deleteProduto: async (idProduto: number) => {
    try {
      const response = await apiBase.get("/produto.php", {
        params: { token: TOKEN, idProduto: idProduto, method: "DELETE" },
      });

      return response.status;
    } catch (err) {
      return { message: "Erro ao tentar deletar o produto", error: err };
    }
  },
};
