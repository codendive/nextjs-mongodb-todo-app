import type { Metadata } from 'next'
import { Goblin_One } from 'next/font/google'
import './globals.css'

const goblinOne = Goblin_One({
  subsets: ['latin'],
  weight: ['400']
})

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Todo app that allows user to handle their todos.'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='en'>
      <body
        className={`${goblinOne.className} bg-gradient-to-r from-blue-500 to-teal-400 text-zinc-100 bg-[length:200%_200%] animate-[gradientMove_10s_ease-in-out_infinite]`}
      >
        <main className='container max-w-6xl px-6 py-12 mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
