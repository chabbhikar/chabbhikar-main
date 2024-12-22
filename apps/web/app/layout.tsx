import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Provider from "../components/provider";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
// });


export const metadata: Metadata = {
  title: "Chabbhikar",
  description: "Chabbhikar Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          {children}
          </Provider>
      </body>
    </html>
  );
}

// className={`${geistSans.variable} ${geistMono.variable}`}
