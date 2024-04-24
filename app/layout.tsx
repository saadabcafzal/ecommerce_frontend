import type { Metadata } from "next"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import ModalProvider from "@/providers/modal-provider"
import ToastProvider from "@/providers/toast-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Store",
  description: "Store - The place for all your purchases.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
