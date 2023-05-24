type Props = {
  label: string;
};

export function RadioGroup({ label }: Props) {
  return (
    <div className="w-40 h-full my-2 py-2 px-2 border rounded">
      <p className="w-full text-center pt-2">{label}</p>
      <div className="flex flex-col gap-2 py-2">
        <label className="flex gap-2 justify-center items-center cursor-pointer hover:bg-zinc-200">
          <input type="radio" name="option" value="Bolo" defaultChecked />
          <span> • Bolo</span>
        </label>
        <label className="flex gap-2 justify-center items-center cursor-pointer hover:bg-zinc-200">
          <input type="radio" name="option" value="Bolo" defaultChecked />
          <span> • Café</span>
        </label>
      </div>
    </div>
  );
}
