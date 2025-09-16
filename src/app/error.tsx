"use client";

import ErrorMessage from "@/components/ErrorMessage/errorMessage";
import { useEffect } from "react";

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error, reset }: RootErrorPageProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <>
      <ErrorMessage
        pageTittle="Internal Server Error"
        contenTitle="501"
        content="Ocorreu um erro do qual nossa aplicação não conseguiu se recuperar."
      />
    </>
  );
}
