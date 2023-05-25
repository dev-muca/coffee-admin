import { NavItem } from "./NavItem";
import { NavLogo } from "./NavLogo";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-screen h-16 bg-brown-500 flex flex-row justify-around items-center sticky top-0 z-0">
      <Link href="/">
        <NavLogo />
      </Link>
      <ul className="flex gap-4">
        <NavItem icon="add" text="novo produto" path="/cadastrar" />
        <NavItem icon="list" text="lista dos produtos" path="/produtos" />
      </ul>
    </nav>
  );
}
