import './globals.css'

export const metadata = {
  title: 'My Next App 01',
  description: 'Meu primeiro app Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='overflow-hidden md:overflow-auto'>
        {children}
      </body>
    </html>
  )
}
