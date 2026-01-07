import './globals.css'
import type { Metadata } from 'next'
import { Sidebar } from '@/components/sidebar/Sidebar'

export const metadata: Metadata = {
  title: 'AI Hedge Fund Dashboard',
  description: 'AI hedge fund operating system UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <div className="mx-auto max-w-[1400px] px-4 py-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[260px_1fr]">
              <Sidebar />
              <main className="min-w-0">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
