import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Shirazo - Architecture & Interior Design Studio",
  description:
    "Professional architecture and interior design studio specializing in contemporary design, 3D visualization, and student mentoring. Located in Israel.",
  keywords: [
    "architecture",
    "interior design",
    "3D visualization",
    "student mentoring",
    "AutoCAD",
    "Lumion",
    "Israel",
    "Tel Aviv architect",
    "Jerusalem interior design",
    "Israeli architecture studio",
  ],
  authors: [{ name: "Shirazo Studio" }],
  creator: "Shirazo Studio",
  publisher: "Shirazo Studio",
  openGraph: {
    title: "Shirazo - Architecture & Interior Design Studio",
    description:
      "Professional architecture and interior design studio specializing in contemporary design, 3D visualization, and student mentoring.",
    url: "https://shirazoarchhouse.com",
    siteName: "Shirazo Studio",
    images: [
      {
        url: "https://shirazoarchhouse.com/images/SHIRZO_logo.png",
        width: 1200,
        height: 630,
        alt: "Shirazo Architecture Studio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shirazo - Architecture & Interior Design Studio",
    description:
      "Professional architecture and interior design studio specializing in contemporary design.",
    images: ["https://shirazoarchhouse.com/images/SHIRZO_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#b2b096" />
      </head>
      <body>{children}</body>
    </html>
  );
}
