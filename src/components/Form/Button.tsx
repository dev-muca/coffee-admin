import { BiLoaderAlt } from "react-icons/bi";

type SubmitProps = {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
  loader?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function SubmitButton({ type, children, loader = false, ...props }: SubmitProps) {
  return (
    <button
      {...props}
      className="w-60 bg-green-600 text-white h-10 border border-zinc-400 px-10 rounded flex justify-center items-center"
    >
      {loader ? <BiLoaderAlt size={24} className="animate-spin text-inherit" /> : <p>{children.toUpperCase()}</p>}
    </button>
  );
}

type ClearProps = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
};

export function ClearButton({ text, ...props }: ClearProps) {
  return (
    <input
      {...props}
      type="button"
      value={text.toUpperCase()}
      className="w-60 bg-inherit text-zinc-400 h-10 border border-zinc-400 px-10 rounded flex justify-center items-center cursor-pointer"
    />
  );
}
