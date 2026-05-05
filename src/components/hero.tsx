"use client"

import { motion } from "motion/react"
import { Mail } from "lucide-react"
import { useTranslations } from "next-intl"
import { buttonVariants } from "@/components/ui/button"
import { GitHubIcon } from "@/components/icons"
import { siteConfig } from "@/data/portfolio"
import { cn } from "@/lib/utils"
import { ParticlesBackground } from "@/components/particles-background"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Hero() {
  const t = useTranslations("hero")

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <motion.div
        className="text-center max-w-3xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <ParticlesBackground />
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tight"
        >
          <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl sm:text-2xl text-muted-foreground mb-6 font-medium"
        >
          {t("subtitle")}
        </motion.p>

        <motion.p
          variants={item}
          className="text-muted-foreground text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          {t("description")}
        </motion.p>

        <motion.div
          variants={item}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600 border-transparent"
            )}
          >
            <GitHubIcon className="mr-2 size-4" />
            {t("cta_github")}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            <Mail className="mr-2 size-4" />
            {t("cta_contact")}
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
