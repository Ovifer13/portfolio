import Link from "next/link"
import { useTranslations } from "next-intl"
import { ThemeToggle } from "@/components/theme-toggle"
import { LocaleSwitcher } from "@/components/locale-switcher"

export function Navbar() {
  const t = useTranslations("nav")

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#experience", label: t("experience") },
    { href: "#skills", label: t("skills") },
    { href: "#contact", label: t("contact") },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-end">
        <nav className="flex items-center gap-1">
          <ul className="hidden md:flex items-center gap-0.5 mr-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <LocaleSwitcher />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
