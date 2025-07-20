"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center mx-auto w-[80%] gap-8 py-4 text-2xl">
      <Link href={'/'} className={pathname === '/' ? "text-blue-500" : ""}>Home</Link>
      <Link href={'/bookmarks'} className={pathname === '/bookmarks' ? "text-blue-500" : ""}>Bookmarks</Link>
      <Link href={'/analytics'} className={pathname === '/analytics' ? "text-blue-500" : ""}>Analytics</Link>
    </nav>
  )
}

export default Navbar