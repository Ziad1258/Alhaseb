
import Footer from "@/components/footer/footer";
import Navbrar from "@/components/navbar/navbrar";

export const metadata = {
  title: "Hasib",
  description: "Generated by Ferdjani Ziad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbrar />
       {children}
       <Footer />
      </body>
    </html>
  );
}