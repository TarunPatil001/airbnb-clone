import { Nunito } from "next/font/google";

import "./globals.css";

const font = Nunito ({
  subsets: ["latin"],
});

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}