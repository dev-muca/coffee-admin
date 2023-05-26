export function TableHead() {
  return (
    <thead className="bg-white border-b">
      <tr>
        <th scope="col" className="text-sm text-gray-900 px-6 py-4 text-center">
          #
        </th>
        <th scope="col" className="text-sm text-gray-900 px-6 py-4 text-left">
          Produto
        </th>
        <th scope="col" className="text-sm text-gray-900 px-6 py-4 text-left">
          Descrição
        </th>
        <th scope="col" className="text-sm text-gray-900 px-6 py-4 text-left">
          Preço
        </th>
        <th scope="col" className="text-sm text-gray-900 px-6 py-4 text-center">
          Categoria
        </th>
        <th scope="col" className="text-sm text-gray-900 px-6 py-4 text-center">
          Ações
        </th>
      </tr>
    </thead>
  );
}
