"use client"

import { motion } from "motion/react"
import { Mail } from "lucide-react"
import { useTranslations } from "next-intl"
import { buttonVariants } from "@/components/ui/button"
import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import { siteConfig } from "@/data/portfolio"
import { cn } from "@/lib/utils"

export function Contact() {
  const t = useTranslations("contact")

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${siteConfig.email}`,
      value: siteConfig.email,
      external: false,
    },
    {
      icon: GitHubIcon,
      label: "GitHub",
      href: siteConfig.github,
      value: "@Ovifer13",
      external: true,
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      href: siteConfig.linkedin,
      value: "ovidio-rodríguez",
      external: true,
    },
  ]

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
          <p className="text-muted-foreground mb-12 max-w-md mx-auto leading-relaxed">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {contactLinks.map(({ icon: Icon, label, href, value, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto"
                )}
              >
                <Icon className="mr-2 size-4" />
                {value}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
