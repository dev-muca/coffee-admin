import { Produto } from "@/types/Produto";
import querystring from "querystring";

export const objectToFormUrlEncoded = (obj: Record<string, any>) => {
  return querystring.stringify(obj);
};

export function formatToBRL(valor: number): string {
  const format = {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  };
  const formatedValue = Number(valor).toLocaleString("pt-BR", format);
  return formatedValue;
}

export const validateForm = (produto: Produto) => {
  const { nome, descricao, foto, preco } = produto;

  if (!nome || !descricao || !foto || !preco) {
    return false;
  }

  return true;
};

export const TOKEN = "04C78878FC183F4E780E99CA26CE975D46E9A801858C95DB7A484DBED539839C";
