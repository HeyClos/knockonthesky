import './globals.css'
import { gluten } from './fonts'

export const metadata = {
  title: 'Knock on the Sky',
  description: 'KOTS is a music organization that helps exceptional artists build sustainable careers. We create music for ads, tv, film and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gluten.className}>{children}</body>
    </html>
  )
}
