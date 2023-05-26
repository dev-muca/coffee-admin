import { Children } from "@/interfaces/Children";
import { BiLoaderAlt } from "react-icons/bi";

interface Props extends Children {
  type: React.HTMLInputTypeAttribute;
  loader: boolean | false;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function SubmitButton({ type, children, loader, ...props }: Props) {
  return (
    <button
      {...props}
      className="w-60 bg-green-600 hover:bg-green-500 text-white h-10 px-10 rounded flex justify-center items-center"
    >
      {loader ? (
        <BiLoaderAlt size={24} className="animate-spin text-inherit" />
      ) : (
        <p>{children?.toString().toUpperCase()}</p>
      )}
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
