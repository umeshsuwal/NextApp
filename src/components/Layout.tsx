import type { ReactNode } from 'react'
import Navbar from './Navbar'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-white py-4 shadow-inner">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} Umesh Suwal
        </div>
      </footer>
    </div>
  )
}

export default Layout