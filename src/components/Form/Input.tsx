import { formatToBRL } from "../../utilities/utilities";

type InputProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ type, label, value, onChange, ...props }: InputProps) {
  return (
    <label className="w-full flex flex-col gap-1">
      <span className="ml-1">{label}</span>
      <input
        {...props}
        type={type}
        className={`border rounded px-2 py-1 placeholder:text-left ${type == "number" ? "text-center" : ""}`}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
