type Props = {
  children: string;
  color?: string;
};

export function Button({ children, color, ...props }: Props) {
  const manipulatedClass = color
    ? `bg-${String(color)}-600 border text-white h-10 px-10 rounded`
    : "bg-white text-zinc-500 h-10 border border-zinc-400 px-10 rounded";

  return (
    <button {...props} className={manipulatedClass}>
      {children.toUpperCase()}
    </button>
  );
}
