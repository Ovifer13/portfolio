"use client"

import { motion } from "motion/react"
import { MapPin } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { siteConfig } from "@/data/portfolio"
import { InteractiveDotGrid } from "@/components/interactive-dot-grid"
import { TypewriterText } from "@/components/typewriter-text"

const spring = { type: "spring", stiffness: 90, damping: 18 } as const

export function About() {
  const t = useTranslations("about")

  return (
    <section id="about" className="relative py-24 px-6 bg-muted/30 overflow-hidden">
      <InteractiveDotGrid />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[auto_1fr] gap-12 items-start">

          {/* Avatar column — slides in from the left */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-3"
            initial={{ opacity: 0, x: -28, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={spring}
          >
            <div className="relative w-32 h-32">
              {/* Glow ring behind the avatar */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-900/40 via-violet-500/30 to-indigo-500/30 scale-110 blur-md" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
                <Image
                  src="/avatar.jpg"
                  alt={siteConfig.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              {siteConfig.location}
            </div>
          </motion.div>

          {/* Content column — slides in from the right, slight delay */}
          <motion.div
            initial={{ opacity: 0, x: 28, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...spring, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-6">{t("title")}</h2>
            <div className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              <TypewriterText text={t("bio")} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
