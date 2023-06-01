type AreaProps = {
  label: string;
  name: string;
  placeholder: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function Area({ label, value, onChange, ...props }: AreaProps) {
  return (
    <label className="flex flex-col gap-1">
      <span className="ml-1">{label}</span>
      <textarea {...props} rows={3} value={value} onChange={onChange} className="border rounded px-2 py-1" />
    </label>
  );
}
