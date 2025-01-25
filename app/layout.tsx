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
  title: 'SRZ Yapı | Cam Balkon ve Kış Bahçesi Sistemleri',
  description:
  'SRZ cam yapı sektöründe cam balkon ve kış bahçesi sistemleri ile hizmet vermektedir. Güvenilir çözümler ve projeler için bizi arayın.',
  keywords: 'cam balkon, kış bahçesi, SRZ cam, güvenilir çözümler, projeler',
  authors: [{ name: 'Ramazan Çakırdım ', url: 'https://www.srzyapi.com.tr' }],
  openGraph: {
    title: 'SRZ cam | Güvenilir Çözümler ve Projeler',
    description:
    'SRZ cam yapı sektöründe cam balkon ve kış bahçesi sistemleri ile hizmet vermektedir.Cam balkon ve kış bahçesi sistemleri için bizi arayın.',
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
