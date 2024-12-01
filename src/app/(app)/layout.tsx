import './globals.css'
import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-blue-50">
        <main>{children}</main>
      </body>
    </html>
  )
}
