import type { Metadata } from "next";
import { ReactNode } from "react";
import "../index.css";

export const metadata: Metadata = {
  title: "Renu Pareta | Professional Portfolio",
  description: "BCA Scholar, Frontend Developer & Enterprise Solutions Specialist",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
