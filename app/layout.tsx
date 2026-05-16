import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";


export const metadata: Metadata = {
  title: {
    default: "Premium Marble & Stone Work | Kitchens, Stairs & CNC",
    template: "%s | Your Marble Brand",
  },
  description:
    "Professional marble, granite, porcelain and stone fabrication for kitchens, stairs, bathrooms, wall cladding and custom CNC work.",
  keywords: ["marble", "granite", "quartz", "porcelain", "countertops", "stairs", "CNC stone", "stone installation"],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
