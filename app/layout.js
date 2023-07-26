import './globals.css'
import { bodoni_moda } from './fonts'

export const metadata = {
  title: 'Knock on the Sky',
  description: 'and listen to the sound.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodoni_moda.className}>{children}</body>
    </html>
  )
}
