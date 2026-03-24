import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border mt-auto py-12 bg-background/50">
      <div className="boxed-container flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-muted-foreground font-medium">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-primary">
            BOXPAGE<span className="text-foreground">STUDIO</span>
          </span>
        </div>

        <nav className="flex items-center gap-8">
          <Link href="https://boxpage.pt" target="_blank" className="hover:text-primary transition-colors">Site Oficial</Link>
          <Link href="https://boxpage.pt/contato" target="_blank" className="hover:text-primary transition-colors">Contato</Link>
          <Link href="https://boxpage.pt/privacidade" target="_blank" className="hover:text-primary transition-colors">Privacidade</Link>
        </nav>

        <div className="text-xs">
          BoxPage Catalog | Edição Premium
        </div>
      </div>
    </footer>
  )
}
