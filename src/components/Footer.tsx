import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-border mt-auto py-12 bg-background/50">
      <div className="boxed-container flex flex-col items-center gap-8 text-sm text-muted-foreground font-medium">
        <nav className="flex items-center gap-8">
          <Link href="https://boxpage.pt" target="_blank" rel="noopener" className="hover:text-primary transition-colors">Site Oficial</Link>
          <Link href="https://boxpage.pt/contato" target="_blank" rel="noopener" className="hover:text-primary transition-colors">Contacto</Link>
          <Link href="https://boxpage.pt/privacidade" target="_blank" rel="noopener" className="hover:text-primary transition-colors">Privacidade</Link>
        </nav>

        <div className="text-xs opacity-60 hover:opacity-100 transition-opacity">
          <Link href="https://boxpage.pt" target="_blank" rel="noopener">
            Um produto <span className="font-bold">BoxPage</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
