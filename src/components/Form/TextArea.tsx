type Props = {
  label: string;
  type?: string;
  name: string;
  placeholder: string;
  value: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | any;
};

export function TextArea({ label, ...props }: Props) {
  return (
    <label className="flex flex-col gap-1 my-2 flex-1">
      <span>{label}</span>
      <textarea {...props} rows={4} className="border border-zinc-400 rounded px-2 py-1" />
    </label>
  );
}
