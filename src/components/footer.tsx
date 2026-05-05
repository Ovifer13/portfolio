import { useTranslations } from "next-intl"
import { siteConfig } from "@/data/portfolio"

export function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="py-8 px-6 border-t border-border/40">
      <div className="mx-auto max-w-5xl text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name} · {t("built")}
      </div>
    </footer>
  )
}
