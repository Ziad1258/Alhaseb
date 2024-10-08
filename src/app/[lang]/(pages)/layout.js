import Footer from "@/components/footer/footer";
import Navbrar from "@/components/navbar/navbrar";

export const metadata = {
  title: "Alhaseb",
  description: "Generated by Ferdjani Ziad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favicon.ico" />
      </head>
      <body>
        <Navbrar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
