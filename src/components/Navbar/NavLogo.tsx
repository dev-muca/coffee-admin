import Image from "next/image";
import CoffeeImage from "../../../public/assets/images/coffee.png";

export function NavLogo() {
  return (
    <div className="flex gap-2 items-center">
      <Image src={CoffeeImage} alt="Xícara com café" className="w-10" />
      <h1 className="text-white text-2xl font-medium">Macieul's Coffee</h1>
    </div>
  );
}
