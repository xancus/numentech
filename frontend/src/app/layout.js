import './globals.css'

export const metadata = {
  title: 'Task list application',
  description: 'Use this application and manage tasks as you want. Enjoy the free content and register to enjoy the full experience'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}
