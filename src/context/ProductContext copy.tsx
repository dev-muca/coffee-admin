import API from "@/services/api";
import { createContext, useState } from "react";
import { ProductListDataSchema } from "../schemas/ProductSchema";
import { TOKEN, objectToFormUrlEncoded } from "@/utils/formUtils";

export const ProductContext = createContext({});

function ProductProvider({ children }: any) {
  const [produtos, setProdutos] = useState<ProductListDataSchema[]>([]);
  const [error, setError] = useState("");

  async function getProdutos() {
    try {
      const response = await API.get("/produtos.php", {
        params: {
          token: TOKEN,
        },
      });

      if (response.status === 200) setProdutos(response.data);

      if (response.status === 204) throw new Error("Nenhum produto cadastrado!");
    } catch (err) {
      console.log(err);
    }
  }

  async function getPRodutoById(idProduto: number) {
    try {
      const response = await API.get("/produtos.php", {
        params: {
          token: TOKEN,
        },
      });

      if (response.status === 200) setProdutos(response.data);

      if (response.status === 204) throw new Error("Nenhum produto cadastrado!");
    } catch (err) {
      console.log(err);
    }
  }

  async function updateProduto(idProduto: number, objProduto: object) {
    const formEncodedData = objectToFormUrlEncoded({ idProduto, objProduto });

    try {
      const response = await API.put("/produto.php", formEncodedData, {
        params: {
          token: TOKEN,
        },
      });
    } catch (err) {}
  }

  return (
    <ProductContext.Provider value={{ getProdutos, updateProduto, produtos, setProdutos }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
