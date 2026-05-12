"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Mail, Check } from "lucide-react"
import { useTranslations } from "next-intl"
import { buttonVariants } from "@/components/ui/button"
import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import { siteConfig } from "@/data/portfolio"
import { cn } from "@/lib/utils"

const spring = { type: "spring", stiffness: 90, damping: 18 } as const

export function Contact() {
  const t = useTranslations("contact")
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(siteConfig.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const externalLinks = [
    {
      icon: GitHubIcon,
      label: "GitHub",
      href: siteConfig.github,
      value: "@Ovifer13",
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      href: siteConfig.linkedin,
      value: "ovidio-rodríguez",
    },
  ]

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-5xl text-center">

        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={spring}
        >
          {t("title")}
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-12 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ...spring, delay: 0.08 }}
        >
          {t("description")}
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Email — copies to clipboard */}
          <motion.button
            onClick={copyEmail}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...spring, delay: 0.16 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            {copied ? <Check className="mr-2 size-4" /> : <Mail className="mr-2 size-4" />}
            {copied ? "Copied!" : siteConfig.email}
          </motion.button>

          {/* External links */}
          {externalLinks.map(({ icon: Icon, label, href, value }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...spring, delay: 0.24 + i * 0.08 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Icon className="mr-2 size-4" />
              {value}
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
