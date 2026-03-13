import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Post & Print Tampa | Design, Print & Shipping | 10861 Cross Creek Blvd",
  description:
    "Post & Print Tampa on 10861 Cross Creek Blvd offers design, print, and shipping solutions. Locally owned and operated. Call (813) 401-9820.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
