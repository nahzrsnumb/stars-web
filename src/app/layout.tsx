import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Cargamos la fuente Inter, ideal para diseños limpios y minimalistas
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stars Nettoyage | L'excellence du propre",
  description: "Gestion et entretien haut de gamme pour chalets et hôtels de luxe en Suisse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
