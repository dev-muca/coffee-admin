import querystring from "querystring";

export const objectToFormUrlEncoded = (obj: Record<string, any>) => {
  return querystring.stringify(obj);
};

export function formatToBRL(valor: number | string): string {
  if (typeof valor === "string") parseFloat(valor);

  const format = {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  };

  const formatedValue = Number(valor).toLocaleString("pt-BR", format);
  return formatedValue;
}
