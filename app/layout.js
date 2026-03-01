import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "TrackNode",
  description: "Премиальная аналитика сайта и контроль заявок",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} bg-background font-sans text-foreground antialiased`}>{children}</body>
    </html>
  );
}
