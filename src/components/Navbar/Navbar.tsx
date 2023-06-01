import Link from "next/link";
import Image from "next/image";
import Coffee from "../../../public/assets/images/coffee.png";
import { NavItem } from "./NavItem";

import { MdDashboard } from "react-icons/md";
import { BiAddToQueue, BiListUl } from "react-icons/bi";

export function Navbar() {
  return (
    <nav className="w-screen h-16 bg-gradient-to-r from-yellow-950 to-orange-950 flex flex-row justify-around items-center sticky top-0 z-0">
      <Link href="/">
        <div className="flex gap-2 items-center">
          <Image src={Coffee} alt="Xícara com café" className="w-10" />
          <h1 className="hidden text-white text-2xl font-medium md:block">Macieul's Coffee</h1>
        </div>
      </Link>
      <ul className="flex gap-2 md:gap-4">
        <NavItem text="Início Dashboard" navigate="/">
          <MdDashboard size={28} />
        </NavItem>

        <NavItem text="Novo Produto" navigate="/novo">
          <BiAddToQueue size={28} />
        </NavItem>

        <NavItem text="Lista de Produtos" navigate="/produtos">
          <BiListUl size={30} />
        </NavItem>
      </ul>
    </nav>
  );
}
