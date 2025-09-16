import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container/container";
import { Header } from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";

export const metadata: Metadata = {
  title: {
    default: "The blog - Inicio",
    template: "%s | The Blog",
  },
  description: "Blog criado utilizando next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Container>
          <Header />

          {children}

          <Footer />
        </Container>
      </body>
    </html>
  );
}
