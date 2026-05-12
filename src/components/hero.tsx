"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Mail, ChevronDown, MapPin, Check } from "lucide-react"
import { useTranslations } from "next-intl"
import { buttonVariants } from "@/components/ui/button"
import { GitHubIcon } from "@/components/icons"
import { siteConfig } from "@/data/portfolio"
import { cn } from "@/lib/utils"
import { ParticlesBackground } from "@/components/particles-background"

// Spring physics for organic, non-linear feel (framer-motion-animator)
const spring = { type: "spring", stiffness: 90, damping: 18 } as const

// Compositor-safe: only opacity + transform + filter (fixing-motion-performance)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: spring,
  },
}

export function Hero() {
  const t = useTranslations("hero")
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(siteConfig.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden">
      <ParticlesBackground />

      <motion.div
        className="relative z-10 text-center max-w-3xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Name — animated gradient shimmer */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tight"
        >
          <span className="bg-linear-to-r from-blue-900 via-violet-500 to-indigo-400 bg-clip-text text-transparent animate-gradient-x">
            {siteConfig.name}
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          className="text-xl sm:text-2xl text-muted-foreground mb-5 font-medium"
        >
          {t("subtitle")}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-muted-foreground text-base sm:text-lg mb-6 max-w-xl mx-auto leading-relaxed"
        >
          {t("description")}
        </motion.p>

        {/* CTAs — whileHover + whileTap micro-interactions (framer-motion-animator) */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <motion.a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600 border-transparent"
            )}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
          >
            <GitHubIcon className="mr-2 size-4" />
            {t("cta_github")}
          </motion.a>
          <motion.button
            onClick={copyEmail}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
          >
            {copied ? <Check className="mr-2 size-4" /> : <Mail className="mr-2 size-4" />}
            {copied ? "Copied!" : t("cta_contact")}
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — fades in after content settles, bounces to invite scrolling */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
