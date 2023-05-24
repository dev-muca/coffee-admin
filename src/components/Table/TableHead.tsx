type Props = {
  headers: string[];
};

export function TableHead({ headers }: Props) {
  return (
    <thead className="bg-white border-b">
      <tr>
        {headers.map((title, index) => (
          <th
            key={index}
            scope="col"
            className={`text-sm text-gray-900 px-6 py-4 ${[0, 3, 4, 5].includes(index) ? "text-center" : "text-left"}`}
          >
            {title}
          </th>
        ))}
      </tr>
    </thead>
  );
}
