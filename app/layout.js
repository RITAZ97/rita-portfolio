import { Inter, Coiny, Sriracha } from "next/font/google";
import "./globals.css";
export const dynamic = 'force-static';

const inter = Inter({
  subsets: ["latin"],
});

const coiny = Coiny({
    subsets: ['latin'],
    weight: ['400'], 
    variable: '--font-coiny',
});

const sriracha = Sriracha({
    subsets: ['latin'],
    weight: ['400'], 
    variable: '--font-sriracha', 
});

export const metadata = {
  title: "My Portfolio",
  description: "Created by Rita",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}