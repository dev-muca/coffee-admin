type Props = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export function Input({ label, ...props }: Props) {
  return (
    <label className="flex flex-col gap-1 mt-4">
      <span>{label}</span>
      <input {...props} className="border border-zinc-400 rounded px-2 py-1" />
    </label>
  );
}
