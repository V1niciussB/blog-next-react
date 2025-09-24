type ErrorMessageProps = {
  pageTittle?: string;
  contenTitle: string;
  content: React.ReactNode;
};

export default function ErrorMessage({
  pageTittle = "",
  contenTitle,
  content,
}: ErrorMessageProps) {
  return (
    <>
      {pageTittle && <title>{pageTittle}</title>}
      <div className="min-h-[320] bg-slate-900 text-slate-100 mb-16 p-8 rounded-xl flex items-center justify-center text-center">
        <div>
          <h1 className="text-7xl/tight mb-4 font-extrabold">{contenTitle}</h1>
          <p> {content} </p>
        </div>
      </div>
    </>
  );
}
