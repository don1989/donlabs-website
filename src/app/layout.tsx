import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Don Labs — AI tools built for your business",
  description:
    "Don Labs builds the AI tools, automations and assistants your business actually needs. Security first, Claude wired in, and handed over so your team can run it without us.",
  metadataBase: new URL("https://donlabs.ai"),
  openGraph: {
    title: "Don Labs — AI tools built for your business",
    description:
      "We build the AI your business needs, teach your team how it works, and wire Claude in so you can run it yourself. No DIY. No retainer trap. No vanishing developer.",
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
