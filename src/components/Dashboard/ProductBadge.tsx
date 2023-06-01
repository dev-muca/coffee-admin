import { ReactNode } from "react";
import { formatToBRL } from "../../utilities/utilities";

type ProductBadgeProps = {
  text: string;
  value: number;
  monetary?: true;
  children?: ReactNode;
};

export function ProductBadge({ text, value, monetary, children }: ProductBadgeProps) {
  return (
    <div className="w-full lg:w-[500px] h-[80px] flex flex-row rounded shadow-lg overflow-hidden hover:scale-105 duration-300">
      <span className="w-1/5 bg-gradient-to-r from-yellow-950 to-orange-950 border border-yellow-950 flex justify-center items-center">
        {children}
      </span>
      <div className="w-4/5 border border-zinc-100 flex flex-col lg:flex-row justify-evenly lg:justify-between items-center md:pl-6 lg:px-6">
        <span className="w-full text-center md:text-left font-medium md:font-bold lg:text-xl text-zinc-700">
          {text.toUpperCase()}
        </span>
        <span className="font-medium md:text-bold lg:text-xl text-zinc-700">
          {monetary ? formatToBRL(value) : value}
        </span>
      </div>
    </div>
  );
}
