import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/ui/header";

export const metadata: Metadata = {
  title: "Hiral Patel",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black" suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  );
}
