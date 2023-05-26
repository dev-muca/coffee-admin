import { ReactNode, ReactElement, JSXElementConstructor } from "react";

export interface Children {
  children: ReactNode | ReactElement<any, string | JSXElementConstructor<any>>;
}
