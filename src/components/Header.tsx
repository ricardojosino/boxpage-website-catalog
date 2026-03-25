'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Menu, X, ArrowRight } from 'lucide-react'
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
    <header className="sticky top-0 z-100 w-full border-b border-border bg-background shadow-sm">

      {/* Desktop Header Content (>= 1200px) */}
      <div className="hidden xl:flex boxed-container h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-primary">
            BOXPAGE<span className="text-foreground">STUDIO</span>
          </span>
        </Link>

        <form onSubmit={handleSearch} className="relative w-full max-w-md group">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Pesquise por código ou nome do modelo"
            className="w-full h-11 pl-11 pr-12 rounded-full bg-secondary/40 border border-white/10 hover:border-white/20 focus:bg-secondary/60 focus:border-primary/30 focus:ring-4 focus:ring-primary/10 text-sm transition-all placeholder:text-muted-foreground/40"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center bg-primary hover:brightness-110 text-primary-foreground rounded-full transition-all active:scale-90 shadow-lg shadow-primary/20"
            aria-label="Pesquisar"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={3} />
          </button>
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
          className="p-2 text-foreground active:scale-95 transition-transform"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-16 z-90 bg-background flex flex-col p-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-8 h-full">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
              <input
                type="text"
                placeholder="Pesquise por código ou nome do modelo"
                className="w-full h-14 pl-12 pr-14 rounded-2xl bg-secondary border border-white/20 focus:border-primary focus:ring-4 focus:ring-primary/10 text-base placeholder:text-muted-foreground transition-all shadow-inner"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center bg-primary hover:brightness-110 text-primary-foreground rounded-xl transition-all active:scale-95 shadow-md shadow-primary/10"
                aria-label="Buscar"
              >
                <ArrowRight className="h-5 w-5" strokeWidth={3} />
              </button>
            </form>

            <nav className="flex flex-col gap-1 w-full">
              {[
                { label: 'Início', href: '/' },
                { label: 'Site Oficial', href: 'https://boxpage.pt', external: true },
                { label: 'Privacidade', href: '/privacidade' }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between py-4 px-2 hover:bg-white/5 rounded-xl transition-colors active:scale-98"
                >
                  <span className="text-lg font-bold tracking-tight">{link.label}</span>
                  <X className="h-4 w-4 rotate-45 opacity-20" />
                </Link>
              ))}
            </nav>

            <div className="mt-auto py-8 border-t border-border/50">
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold text-center">
                BoxPage Studio &copy; 2026
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
