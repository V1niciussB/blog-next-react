import ErrorMessage from "@/components/ErrorMessage/errorMessage";

export default function NotFoundPage() {
  return (
    <>
      <ErrorMessage
        pageTittle="Página não encontrada"
        contenTitle="404"
        content="Erro 404 - A página que vc está tentando acessar não existe!"
      />
    </>
  );
}
