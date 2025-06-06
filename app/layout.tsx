import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { FirebaseProvider } from "@/lib/firebase"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "StudySync - Collaborative Study Platform",
  description: "A real-time collaborative study platform with Pomodoro timer and shared notes",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <FirebaseProvider>{children}</FirebaseProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
