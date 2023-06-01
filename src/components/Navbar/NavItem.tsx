import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type NavItemProps = {
  text: string;
  navigate: string;
  children: ReactNode;
};

export function NavItem({ text, navigate, children }: NavItemProps) {
  const router = useRouter();

  return (
    <li className="w-20 h-24 md:w-24 hover:border hover:border-white bg-gradient-to-bl from-yellow-900 to-orange-950 md:mt-8 rounded-b-md">
      <button
        onClick={() => router.push(navigate)}
        className="w-full h-full flex flex-col gap-2 justify-center items-center text-white"
      >
        <p className="w-4/5 h-full text-center font-medium text-xs flex flex-col pt-7 md:pt-3 items-center gap-2">
          {children}
          <span className="uppercase hidden md:block">{text}</span>
          <span className="md:hidden">{text.split(" ")[0]}</span>
        </p>
      </button>
    </li>
  );
}
