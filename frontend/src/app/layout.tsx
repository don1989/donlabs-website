import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Don Labs — Done-For-You AI for your business",
  description:
    "Don Labs builds the AI tools and systems that supercharge your work — done-for-you, security-first, and handed over with Claude wired in so your team can run it without us.",
  metadataBase: new URL("https://donlabs.ai"),
  openGraph: {
    title: "Don Labs — Done-For-You AI for your business",
    description:
      "We build the AI your business needs, teach you exactly how it works, and connect Claude so you can run it yourself. No DIY. No hand-holding forever. No developer who disappears.",
    type: "website",
    url: "https://donlabs.ai",
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
