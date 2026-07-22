import type { Metadata } from "next";
import { Anton, Archivo, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.scss";
import Providers from "./providers";


const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Agustín Montes | AI Developer & Automations",
  description: "AI Developer building AI agents, business automations and full stack web applications.",
  openGraph: {
    title: "Agustín Montes | AI Developer & Automations",
    description: "AI agents, business automations and full stack web applications.",
    type: "website",
    locale: "es_AR",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustín Montes | AI Developer & Automations",
    description: "AI agents, business automations and full stack web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${archivo.variable} ${jetbrainsMono.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
