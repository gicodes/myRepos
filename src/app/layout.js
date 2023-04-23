import { Poppins } from 'next/font/google';
import Header from '@/app/components/header';
import './globals.css'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
});

export const metadata = {
  title: 'Gi codes: My Repos',
  description: "This is a hub for Gi codes' Repositories",
  keywords: 'javascript, next, 13, codes, dev, repo, react, html, node.js, npm'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
