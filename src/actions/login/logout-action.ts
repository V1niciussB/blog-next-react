"use server";

import { deleteLoginSession } from "@/lib/LOGIN/manage-login";
import { redirect } from "next/navigation";

export async function logoutAction() {
  await deleteLoginSession();
  redirect("/");
}
