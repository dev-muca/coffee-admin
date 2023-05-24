type Props = {
  label: string;
  type: string;
  placeholder: string;
};

export function Input({ label, ...props }: Props) {
  return (
    <label className="flex flex-col gap-1 mt-4">
      <span>{label}</span>
      <input {...props} className="border border-zinc-400 rounded px-2 py-1" />
    </label>
  );
}
