import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script"; // Import Next.js Script for optimized loading
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SRZ Yapı | Cam Balkon ve Kış Bahçesi Sistemleri",
  description:
    "SRZ cam yapı sektöründe cam balkon ve kış bahçesi sistemleri ile hizmet vermektedir. Güvenilir çözümler ve projeler için bizi arayın.",
  keywords: "cam balkon, kış bahçesi, SRZ cam, güvenilir çözümler, projeler",
  authors: [{ name: "Ramazan Çakırdım", url: "https://www.srzyapi.com.tr" }],
  openGraph: {
    title: "SRZ cam | Güvenilir Çözümler ve Projeler",
    description:
      "SRZ cam yapı sektöründe cam balkon ve kış bahçesi sistemleri ile hizmet vermektedir.Cam balkon ve kış bahçesi sistemleri için bizi arayın.",
    url: "https://www.srzyapi.com.tr",
    siteName: "SRZ Yapı",
    images: [
      {
        url: "/assets/bas-alt-yapi-preview.png",
        width: 1200,
        height: 630,
        alt: "SRZ Yapı Görseli",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
  <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
  <link rel="manifest" href="/favicons/site.webmanifest" />
  <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PJ5WDXVR');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PJ5WDXVR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager */}

        <main>{children}</main>
      </body>
    </html>
  );
}
