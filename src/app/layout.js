import { logo } from '@/assets'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hoobank - Empowering Your Financial Future | Vinod Kumar',
  description: 'Discover secure and innovative banking solutions with Hoobank. Expert financial planning, competitive credit card deals, and more. By Vinod Kumar, your partner in financial success.',
  keywords: 'Hoobank, banking, finance, financial planning, credit card deals, secure banking, Vinod Kumar, financial success, personal finance',
  ogTitle: 'Hoobank - Empowering Your Financial Future | Vinod Kumar',
  ogDescription: 'Discover secure and innovative banking solutions with Hoobank. Expert financial planning, competitive credit card deals, and more. By Vinod Kumar, your partner in financial success.',
  ogType: 'website',
  twitterTitle: 'Hoobank - Empowering Your Financial Future | Vinod Kumar',
  twitterDescription: 'Discover secure and innovative banking solutions with Hoobank. Expert financial planning, competitive credit card deals, and more. By Vinod Kumar, your partner in financial success.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
