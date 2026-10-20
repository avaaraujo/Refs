import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { vulfSans, plexSans, canela } from "./fonts";

export const metadata: Metadata = {
  title: "Refs do Avá — biblioteca de referências",
  description: "Sua biblioteca de referências visuais, organizada por IA.",
};

// viewport-fit=cover deixa o app ocupar a tela toda no iPhone (notch/home
// indicator) — os respiros de safe-area ficam no globals.css; theme-color
// pinta a barra do navegador com o --bg de cada tema
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6ee" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${vulfSans.variable} ${plexSans.variable} ${canela.variable}`}>
      <body>
        {children}
        <Toaster position="bottom-right" theme="system" richColors />
      </body>
    </html>
  );
}
