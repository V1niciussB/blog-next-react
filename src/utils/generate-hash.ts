import { hashPassword } from "@/lib/LOGIN/manage-login";

(async () => {
  const minhaSenha = "12345";
  const hashDaSenha = await hashPassword(minhaSenha);

  console.log({ hashDaSenha });
})();
