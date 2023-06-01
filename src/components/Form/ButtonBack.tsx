import { useRouter } from "next/router";
import { BiLoaderAlt } from "react-icons/bi";

type ButtonProps = {
  children: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  loader?: boolean;
  navigate?: string;
};

export function ButtonBack({ children, className, type, loader, navigate, ...props }: ButtonProps) {
  const router = useRouter();

  return (
    <button
      {...props}
      type={type}
      onClick={(e) => {
        e.preventDefault();
        navigate && router.push(navigate);
      }}
      className={`w-full md:w-[220px] h-10 rounded shadow ${className}`}
    >
      <span className="uppercase flex justify-center items-center">
        {loader ? <BiLoaderAlt size={28} className="animate-spin" /> : children}
      </span>
    </button>
  );
}
