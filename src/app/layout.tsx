import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import Providers from "./providers";


const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Agustín Montes | AI Developer & Automations",
  description: "AI Developer building AI agents, business automations and full stack web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
