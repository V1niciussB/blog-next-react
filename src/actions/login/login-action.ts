"use server";

import { createLoginSession, verifyPassword } from "@/lib/LOGIN/manage-login";
import { asyncDelay } from "@/utils/async-delay";
import { error } from "console";
import { redirect } from "next/navigation";

type loginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: loginActionState, formData: FormData) {
  const allowLogin = Boolean(Number(process.env.ALLOW_LOGIN));

  if (!allowLogin) {
    return {
      username: "",
      error: "Login not allowed",
    };
  }

  await asyncDelay(3000);

  if (!(formData instanceof FormData)) {
    return {
      username: "",
      error: "Dados inválidos",
    };
  }

  // Dados que o usuário digitou no form
  const username = formData.get("username")?.toString().trim() || "";
  const password = formData.get("username")?.toString().trim() || "";

  if (!username || !password) {
    return {
      username,
      error: "Digite o usuário e a senha",
    };
  }

  // Verificando se o usuário existe na base de dados;
  const isUsernameValid = username === process.env.LOGIN_USER;
  const isPasswordValid = await verifyPassword(
    password,
    process.env.LOGIN_PASS || ""
  );

  if (!isUsernameValid && !isPasswordValid) {
    return {
      username,
      error: "Usuário ou senha inválidos",
    };
  }

  await createLoginSession(username);
  redirect("/admin/post");
}
