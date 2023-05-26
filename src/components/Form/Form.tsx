import { Children } from "@/interfaces/Children";
import { FormEvent } from "react";
import { Title } from "./Title";

interface Props extends Children {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  // onSubmit?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Form({ children, onSubmit, ...props }: Props) {
  return (
    <form {...props} className="w-4/5 mx-auto" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
