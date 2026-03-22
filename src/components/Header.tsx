'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/modelos?search=${encodeURIComponent(searchQuery.trim())}`)
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      {/* Desktop Header Content (>= 1200px) */}
      <div className="hidden xl:flex boxed-container h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-primary">
            BOXPAGE<span className="text-foreground">STUDIO</span>
          </span>
        </Link>

        <form onSubmit={handleSearch} className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Pesquisar por nome ou código..."
            className="w-full h-10 pl-10 pr-4 rounded-full bg-secondary border-none focus:ring-2 focus:ring-primary text-sm transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Início</Link>
          <Link href="https://boxpage.pt" target="_blank" className="hover:text-primary transition-colors">Site Oficial</Link>
        </nav>
      </div>

      {/* Mobile/Tablet Header Content (< 1200px) */}
      <div className="xl:hidden full-container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-primary">
            BOXPAGE<span className="text-foreground text-lg">STUDIO</span>
          </span>
        </Link>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-foreground"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-16 z-40 bg-background flex flex-col p-6 animate-in slide-in-from-top duration-300">
          <form onSubmit={handleSearch} className="relative w-full mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Pesquisar modelos..."
              className="w-full h-12 pl-10 pr-4 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-primary text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <nav className="flex flex-col gap-6 text-xl font-semibold">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Início</Link>
            <Link href="https://boxpage.pt" target="_blank" onClick={() => setIsMenuOpen(false)}>Site Oficial</Link>
            <Link href="/privacidade" onClick={() => setIsMenuOpen(false)}>Privacidade</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
