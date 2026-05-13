import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DonLabs — Practical AI for ambitious teams",
  description:
    "DonLabs is a staff engineer-led AI consultancy. We help teams scope, ship, and scale production AI — from first prototype to live workflows.",
  metadataBase: new URL("https://donlabs.ai"),
  openGraph: {
    title: "DonLabs — Practical AI for ambitious teams",
    description:
      "Staff engineer-led AI consultancy. Scope, ship, and scale production AI without the theatre.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
