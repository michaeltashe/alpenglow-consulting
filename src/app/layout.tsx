import type { Metadata } from "next";
import "./globals.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "Alpenglow",
  description: "The best duo on Earth",
  manifest: '/manifest.json',
  icons: [
    { rel: "apple-touch-icon", url: "/icons/ChatGPT Image Jul 13, 2025, 11_04_30 PM-128.png" },
    { rel: "icon", url: "/icons/ChatGPT Image Jul 13, 2025, 11_04_30 PM-128.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Theme appearance="dark" accentColor="plum">
          {children}
          <ThemePanel defaultOpen={false} />
        </Theme>
      </body>
    </html>
  );
}
