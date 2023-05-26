import Link from "next/link";
import { BiAddToQueue, BiListUl } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";

type Props = {
  icon: string;
  text: string;
  path: string;
};

export function NavItem({ icon, text, path }: Props) {
  return (
    <li className="w-24 hover:border hover:border-white h-24  bg-brown-400 mt-8 rounded-b-md">
      <Link href={path} className="w-full h-full flex flex-col gap-2 justify-center items-center text-white">
        {icon === "add" ? (
          <BiAddToQueue size={28} />
        ) : icon === "list" ? (
          <BiListUl size={28} />
        ) : (
          <MdDashboard size={28} />
        )}
        <p className="w-4/5 text-center font-medium text-xs">{text.toUpperCase()}</p>
      </Link>
    </li>
  );
}
