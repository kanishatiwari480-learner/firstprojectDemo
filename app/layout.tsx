import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'SpendWise — Expense Tracker', description: 'A realistic personal expense tracker dashboard.' }
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html> }
