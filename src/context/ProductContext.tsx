import { useApi } from "@/hooks/useApi";
import { Produto } from "../types/Produto";
import { createContext } from "react";
import { Children } from "@/interfaces/Children";

export type ProdutoContextType = {
  getAllProdutos: () => Promise<void>;
  getProdutoByID: (idProduto: number) => Promise<void>;
  createProduto: (produto: Produto) => Promise<number>;
  updateProduto: (idProduto: number, produto: Produto) => Promise<number>;
  deleteProdutoByID: (idProduto: number) => Promise<number>;
};

export const ProdutoContext = createContext<ProdutoContextType>(null!);

function ProductProvider({ children }: Children) {
  const API = useApi();

  const getAllProdutos = async () => {
    const data = await API.getAllProdutos();
    return data;
  };

  const getProdutoByID = async (idProduto: number) => {
    const data = await API.getProdutoByID(idProduto);
    return data;
  };

  const createProduto = async (produto: Produto) => {
    const httpStatusCode = await API.createProduto(produto);
    return httpStatusCode;
  };

  const updateProduto = async (idProduto: number, produto: Produto) => {
    const httpStatusCode = await API.updateProduto(idProduto, produto);
    return httpStatusCode;
  };

  const deleteProdutoByID = async (idProduto: number) => {
    const httpStatusCode = await API.deleteProdutoByID(idProduto);
    return httpStatusCode;
  };

  return (
    <ProdutoContext.Provider
      value={{ getAllProdutos, getProdutoByID, createProduto, updateProduto, deleteProdutoByID }}
    >
      {children}
    </ProdutoContext.Provider>
  );
}

export default ProductProvider;
