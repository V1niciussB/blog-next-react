import { Container } from "@/components/Container/container";
import { Header } from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";
import { ToastifyContainer } from "@/components/ToastifyContainer";
import { MenuAdmin } from "../MenuAdmin";

type AdminPostLayoutProps = {
  children: React.ReactNode;
};

export default function AdminPostLayout({
  children,
}: Readonly<AdminPostLayoutProps>) {
  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}
