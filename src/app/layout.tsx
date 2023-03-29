import Link from 'next/link'

import '@/styles/global.css'

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>Header Layout</header>
        
        <Link href={'/'}>Home</Link>
        <Link href={'/dashboard'}>Dashboard</Link>
        
        {children}
        
        <footer>Footer Layout</footer>
      </body>
    </html>
  )
}
