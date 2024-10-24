import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import HeaderNavbar from "./_components/header/headernavbar";
import FooterContent from "./_components/footer/footer";
import Providers from "./_components/Provider";
import SessionWrapper from "./_components/SessionWrapper";
export const metadata: Metadata = {
  title: "E-commerce App",
  description: "Build by mng721",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {


  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body suppressHydrationWarning={true}>
        <SessionWrapper>
          <Providers>
            <HeaderNavbar />
            {children}
            <FooterContent />
          </Providers>
        </SessionWrapper>
      </body>
    </html>
  );
}
