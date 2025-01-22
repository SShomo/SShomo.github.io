import Link from 'next/link'
import { Cat, Fish, Gamepad2, Newspaper, Mail, Briefcase } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-amber-700 text-amber-100">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center items-center space-x-6">
          <li><Cat className="w-8 h-8" /></li>
          <li><Link href="#skills" className="hover:text-white flex items-center"><Fish className="w-4 h-4 mr-1" /> Skills</Link></li>
          <li><Link href="#demo-reels" className="hover:text-white flex items-center"><Gamepad2 className="w-4 h-4 mr-1" /> Demo Reels</Link></li>
          <li><Link href="#blog" className="hover:text-white flex items-center"><Newspaper className="w-4 h-4 mr-1" /> Blog</Link></li>
          <li><Link href="#contact" className="hover:text-white flex items-center"><Mail className="w-4 h-4 mr-1" /> Contact</Link></li>
          <li><Link href="#work-history" className="hover:text-white flex items-center"><Briefcase className="w-4 h-4 mr-1" /> Work History</Link></li>
        </ul>
      </nav>
    </header>
  )
}

