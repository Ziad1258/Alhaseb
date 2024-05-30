
import "./globals.css";

import Footer from "@/components/footer/footer";
import Navbrar from "@/components/navbar/navbrar";
import ResultProvider from "./context/resultContext";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ResultProvider>
          <Navbrar />

          {children}
        <Footer />
        </ResultProvider>
      </body>
    </html>
  );
}