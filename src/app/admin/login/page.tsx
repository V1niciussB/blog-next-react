import { LoginForm } from "@/components/admin/LoginForm";
import ErrorMessage from "@/components/ErrorMessage/errorMessage";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Login",
};

export default async function AdminLoginPage() {
  const allowLogin = Boolean(Number(process.env.ALLOW_LOGIN));

  if (!allowLogin) {
    return (
      <ErrorMessage
        contenTitle="403"
        content="Libere o sistema de login utilizando ALLOW_LOGIN"
      />
    );
  }

  return <LoginForm />;
}
