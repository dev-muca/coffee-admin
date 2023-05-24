import { useState } from "react";

type Props = {
  label: string;
  onChangeState: any;
};

export function RadioGroup({ label, onChangeState }: Props) {
  const [option, setOption] = useState<number>(1);

  function handleRadioChange(value: number) {
    setOption(value);
    onChangeState(value);
  }

  return (
    <div className="w-40 h-full my-2 py-2 px-2 border rounded">
      <p className="w-full text-center pt-2">{label}</p>
      <div className="flex flex-col gap-2 py-2">
        <label className="flex gap-2 justify-center items-center cursor-pointer hover:bg-zinc-200">
          <input
            type="radio"
            name="idCategoria"
            value={1}
            checked={option === 1}
            onChange={() => handleRadioChange(1)}
          />
          <span> • Bolo</span>
        </label>
        <label className="flex gap-2 justify-center items-center cursor-pointer hover:bg-zinc-200">
          <input
            type="radio"
            name="idCategoria"
            value={2}
            checked={option === 2}
            onChange={() => handleRadioChange(2)}
          />
          <span> • Café</span>
        </label>
      </div>
    </div>
  );
}
