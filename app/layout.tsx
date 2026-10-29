import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

// Root metadata
export const metadata: Metadata = {
  title: "Hirenz - Connecting Talent. Creating Futures.",
  description:
    "Premier recruitment and human resource consultancy firm delivering tailored talent acquisition and executive search solutions worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} h-full antialiased overflow-x-hidden`}
      suppressHydrationWarning>
      <body className="min-h-full flex flex-col w-full max-w-full overflow-x-hidden relative" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

