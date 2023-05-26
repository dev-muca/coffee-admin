import { useApi } from "@/hooks/useApi";
import { Produto } from "../types/Produto";
import { Children } from "@/interfaces/Children";
import { ReactNode, createContext, useState } from "react";

export type ProdutoContextType = {
  produto?: Produto | null;
  getAllProdutos: () => Promise<void>;
  getProdutoByID: (idProduto: number) => Promise<void>;
  createProduto: (produto: Produto) => Promise<number>;
  updateProduto: (idProduto: number, produto: Produto) => Promise<number>;
  deleteProdutoByID: (idProduto: number) => Promise<number>;
};

export const ProdutoContext = createContext<ProdutoContextType>(null!);

function ProductProvider({ children }: Children) {
  const [produto, setProduto] = useState<any>(null);
  const API = useApi();

  const getAllProdutos = async () => {
    const data = await API.getAllProdutos();
    setProduto(data);
  };

  const getProdutoByID = async (idProduto: number) => {
    const data = await API.getProdutoByID(idProduto);
    setProduto(data);
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
      value={{ produto, getAllProdutos, getProdutoByID, createProduto, updateProduto, deleteProdutoByID }}
    >
      {children}
    </ProdutoContext.Provider>
  );
}

export default ProductProvider;
