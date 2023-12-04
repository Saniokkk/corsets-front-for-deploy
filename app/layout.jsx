import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header } from "./components";

const zodiak = localFont({
  src: [
    {
      path: "../public/fonts/Zodiak-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Zodiak-Bold.woff2",
      weight: "540",
    },
    {
      path: "../public/fonts/Zodiak-Black.woff2",
      weight: "700",
    },
  ],
  // variable: '--font-zodiak'
});

export const metadata = {
  title: "Your Rules",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={zodiak.className}>
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
