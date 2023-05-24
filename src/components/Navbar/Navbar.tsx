import { NavItem } from "./NavItem";
import { NavLogo } from "./NavLogo";

export function Navbar() {
  return (
    <nav className="w-screen h-16 bg-brown-500 flex flex-row justify-around items-center">
      <NavLogo />
      <ul className="flex gap-4">
        <NavItem icon="add" text="novo produto" path="/cadastrar" />
        <NavItem icon="list" text="lista dos produtos" path="/produtos" />
      </ul>
    </nav>
  );
}
