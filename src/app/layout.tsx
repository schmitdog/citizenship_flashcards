import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "US Citizenship Test",
  description: "Official USCIS Civics Questions & Answers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}