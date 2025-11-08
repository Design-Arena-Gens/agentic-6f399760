import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Forensic Face Reconstruction',
  description: 'AI-powered forensic face reconstruction and enhancement tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
