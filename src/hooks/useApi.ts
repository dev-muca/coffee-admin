import axios from "axios";
import { objectToFormUrlEncoded } from "@/utils/formUtils";
import { env } from "process";

//04C78878FC183F4E780E99CA26CE975D46E9A801858C95DB7A484DBED539839C
export const TOKEN = "04C78878FC183F4E780E99CA26CE975D46E9A801858C95DB7A484DBED539839C";

const API = axios.create({
  baseURL: "https://www.fateclins.edu.br/felipeMaciel/api/macieulsCoffee",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});

export const useApi = () => ({
  getAllProdutos: async () => {
    const response = await API.get("/produtos.php", { params: { token: TOKEN } });
    return response.data;
  },

  getProdutoByID: async (idProduto: number) => {
    const response = await API.get("/produto.php", { params: { token: TOKEN, idProduto: idProduto } });
    return response.data;
  },

  createProduto: async (produto: object) => {
    const dataUrlEncoded = objectToFormUrlEncoded(produto);
    const response = await API.post("/produto.php", dataUrlEncoded);
    return response.status;
  },

  updateProduto: async (idProduto: number, produto: object) => {
    const dataUrlEncoded = objectToFormUrlEncoded({ idProduto, produtoData: produto });
    const response = await API.put("/produto.php", dataUrlEncoded, { params: { token: TOKEN } });
    return response.status;
  },

  deleteProdutoByID: async (idProduto: number) => {
    const response = await API.delete("/produto.php", { params: { token: TOKEN, idProduto: idProduto } });
    return response.status;
  },
});
