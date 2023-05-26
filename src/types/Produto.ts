export type Produto = {
  nome: string;
  foto?: string;
  preco: number;
  descricao: string;
  idCategoria: number;
  idProduto?: number;
  token?: string;
  map?: (params: any) => any;
};
