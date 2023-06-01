import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return <section className={`w-4/5 mx-auto ${className}`}>{children}</section>;
}
