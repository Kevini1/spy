import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'FastSecure.org - Protect Your Mobile Experience - fastsecure',
  description: 'Protect Your Mobile Experience',
  generator: 'fastsecure.org',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <!-- Google tag (gtag.js) -->
      <script async='async' src='https://www.googletagmanager.com/gtag/js?id=G-21KY3C928N'></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
    
        gtag('config', 'G-21KY3C928N');
      </script> 
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
