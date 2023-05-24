export function Form({ title, children, ...props }: any) {
  return (
    <form {...props} className="w-4/5 mx-auto">
      <h1 className="w-full text-left font-bold text-2xl text-zinc-800 border-b border-black">{title.toUpperCase()}</h1>
      <div className="my-12">{children}</div>
    </form>
  );
}
