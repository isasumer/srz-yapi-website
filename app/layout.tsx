import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'SRZ Yapı | Güvenilir İnşaat Çözümleri',
  description:
    'SRZ Yapı olarak inşaat projelerinde kaliteli ve güvenilir çözümler sunuyoruz. Detaylı bilgi için sayfamızı ziyaret edin.',
  keywords: 'inşaat, altyapı, SRZ Yapı, güvenilir çözümler, projeler',
  authors: [{ name: 'Ramazan Çakırdım ', url: 'https://www.srzyapi.com.tr' }],
  openGraph: {
    title: 'SRZ Yapı | Güvenilir İnşaat Çözümleri',
    description:
      'SRZ Yapı olarak inşaat projelerinde kaliteli ve güvenilir çözümler sunuyoruz.',
    url: 'https://www.srzyapi.com.tr',
    siteName: 'SRZ Yapı',
    images: [
      {
        url: '/assets/bas-alt-yapi-preview.png',
        width: 1200,
        height: 630,
        alt: 'SRZ Yapı Görseli'
      }
    ],
    locale: 'tr_TR',
    type: 'website'
  },
  viewport: 'width=device-width, initial-scale=1'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='tr'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='robots' content='index, follow' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  )
}
