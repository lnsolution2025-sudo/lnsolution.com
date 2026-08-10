import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "L N Solution | Tax & Legal Consulting",
  description: "Professional tax, GST, legal, compliance and business consultancy services in Bhubaneswar, Odisha.",
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body>{children}</body></html>;
}
