import { Inter, Inter_Tight, Open_Sans } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const interTight = Inter_Tight({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-inter-tight" });
// Matches the live demo (csi-church.vercel.app) exactly — its @font-face
// declares Open Sans 400; used on the auth pages via font-open-sans.
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-open-sans" });

export const metadata = {
  title: "CSI St. John's Church — Church Management System",
  description: "Manage members, families, ministries, finance, and events for CSI St. John's Church.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${openSans.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
