export interface Produto {
  idProduto?: number;
  nome: string;
  foto: string;
  preco: number | undefined;
  descricao: string;
  idCategoria: number;
  token: string;
}
