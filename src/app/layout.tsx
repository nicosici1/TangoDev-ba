import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "Osmo - Start building websites people remember",
  description: "Osmo is your personal toolbox, packed with components, techniques, tricks and tutorials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-helvetica-neue antialiased">
        {children}
      </body>
    </html>
  );
}
