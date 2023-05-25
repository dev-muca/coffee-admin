import { ReactNode, createContext, useState } from "react";
import { Produto } from "../types/Produto";
import { Http2ServerResponse } from "http2";
import { Children } from "@/interfaces/Children";
import { useApi } from "@/hooks/useApi";

export type ProdutoContextType = {
  produto?: Produto[] | null;
  getAllProdutos: () => Promise<void>;
  getProdutoByID: (idProduto: number) => Promise<void>;
  createProduto: (produto: Produto) => Promise<number>;
  // updateProduto?: (idProduto: number, produto: Produto) => Promise<Http2ServerResponse>;
  // deleteProdutoByID?: (idProduto: number) => Promise<Http2ServerResponse>;
};

export const ProdutoContext = createContext<ProdutoContextType>(null!);

function ProductProvider({ children }: Children) {
  const [produto, setProduto] = useState<Produto[] | null>(null);
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
    const data = await API.createProduto(produto);
    return data;
  };

  return (
    <ProdutoContext.Provider value={{ produto, getAllProdutos, getProdutoByID, createProduto }}>
      {children}
    </ProdutoContext.Provider>
  );
}

export default ProductProvider;
