type OptionProps = {
  name: string;
  value: number;
};

type DropdownProps = {
  label: string;
  options: OptionProps[];
  value?: string | number;
  onOptionSelect: (value: number) => void;
};

export function Dropdown({ label, options, onOptionSelect }: DropdownProps) {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onOptionSelect(Number(selectedValue));
  };

  return (
    <div className="w-full flex flex-col gap-1">
      <span className="ml-1">{label}</span>
      <select className="border px-2 py-1 rounded" onChange={handleSelect}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
