import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })

export const metadata: Metadata = {
  title: "Temesgen Marie - Elite Backend & Mobile Developer | Global Portfolio",
  description:
    "World-class backend and mobile app developer specializing in scalable microservices, cloud architecture, and cross-platform mobile solutions. Trusted by Fortune 500 companies and startups worldwide.",
  keywords: [
    "backend developer",
    "mobile app developer",
    "full stack developer",
    "Node.js expert",
    "React Native developer",
    "Flutter developer",
    "microservices architect",
    "cloud solutions",
    "API development",
    "scalable applications",
    "enterprise software",
    "freelance developer",
    "remote developer",
    "software consultant",
  ],
  authors: [{ name: "Temesgen Marie", url: "https://temesgen-marie.dev" }],
  creator: "Temesgen Marie",
  publisher: "Temesgen Marie",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://temesgen-marie.dev",
    title: "Temesgen Marie - Elite Backend & Mobile Developer",
    description:
      "World-class backend and mobile app developer specializing in scalable solutions for global businesses.",
    siteName: "Temesgen Marie Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Temesgen Marie - Backend & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Temesgen Marie - Elite Backend & Mobile Developer",
    description:
      "World-class backend and mobile app developer specializing in scalable solutions for global businesses.",
    creator: "@temesgen_marie",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${sora.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}

        {/* Analytics Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics or other analytics code
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  )
}
