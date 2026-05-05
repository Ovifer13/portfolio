"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function switchLocale() {
    const next = locale === "en" ? "es" : "en"
    router.replace(pathname, { locale: next })
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={switchLocale}
      aria-label="Switch language"
      className="gap-1.5 font-medium text-muted-foreground cursor-pointer hover:text-foreground"
    >
      <Languages className="size-3.5" />
      {locale === "en" ? "ES" : "EN"}
    </Button>
  )
}
