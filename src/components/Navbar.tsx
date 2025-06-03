import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  
  const isActive = (pathname: string) => 
    router.pathname === pathname 
      ? 'bg-primary-500 text-white' 
      : 'text-gray-700 hover:bg-gray-100'

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
            NextApp
          </Link>
          <div className="flex space-x-1">
            <Link href="/" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/')} transition-colors`}>
              Home
            </Link>
            <Link href="/posts" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/posts')} transition-colors`}>
              Posts
            </Link>
            <Link href="/about" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/about')} transition-colors`}>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar