import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '¡Experimenta el Mejor Servidor de Juego de Rust en Colombia con Saqueo 2x y Administradores no jugadores!',
  description: 'Únete al mejor servidor de juego de Rust en Colombia para disfrutar de una experiencia de juego mejorada con tasas de saqueo aumentadas y una jugabilidad justa. Disfruta de un juego equilibrado con un rendimiento optimizado del servidor. ¡Únete ahora!',
  openGraph: {
    title: 'TroncosLand | Rust',
    description: 'Únete al mejor servidor de juego de Rust en Colombia para disfrutar de una experiencia de juego mejorada con tasas de saqueo aumentadas y una jugabilidad justa. Disfruta de un juego equilibrado con un rendimiento optimizado del servidor. ¡Únete ahora!',
    url: 'https://troncosland.co',
    siteName: 'TroncosLand',
    images: [
      {
        url: '/Web-Cover.png',
        width: 800,
        height: 800
      }
    ],
    locale: 'es_CO',
    type: 'website',
  },
  metadataBase: new URL('https://s3.amazonaws.com/santiagosaavedra.com.co')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
