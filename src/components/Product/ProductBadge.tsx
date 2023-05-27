import { MdAttachMoney } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { BiDish } from "react-icons/bi";

type Props = {
  icon: number;
  content: string;
  value: number;
};

export const iconList = [<MdAttachMoney size={48} />, <GiKnifeFork size={48} />, <BiDish size={48} />];

export function ProductBadge({ icon, content = "lorem ipsum dlor", value = 0 }: Props) {
  return (
    <div className="w-700 h-20 border border-brown-400 flex rounded overflow-hidden">
      <div className="w-32 h-full bg-brown-400 text-white flex justify-center items-center">{iconList[icon]}</div>
      <div className="bg-slate-100 font-medium text-2xl flex justify-start items-center gap-8 px-8 w-full">
        <span className="w-80">{content.toUpperCase()}</span>
        <span className="w-1/5 text-center">{icon != 2 ? `R$ ${value}` : value}</span>
      </div>
    </div>
  );
}
