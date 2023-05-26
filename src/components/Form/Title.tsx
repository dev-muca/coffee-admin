interface Props {
  text: string;
}

export function Title({ text }: Props) {
  return (
    <h1 className="w-full text-left font-bold text-2xl text-zinc-800 border-b border-black my-8">
      {text.toUpperCase()}
    </h1>
  );
}
