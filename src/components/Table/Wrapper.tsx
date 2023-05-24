export function Wrapper({ children }: any) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="py-2 inline-block min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full">{children}</table>
          </div>
        </div>
      </div>
    </div>
  );
}
