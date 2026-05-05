"use client"

import { motion } from "motion/react"
import { MapPin } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { siteConfig } from "@/data/portfolio"
import { GradientOrbs } from "@/components/gradient-orbs"
import { TypewriterText } from "@/components/typewriter-text"

export function About() {
  const t = useTranslations("about")

  return (
    <section id="about" className="relative py-24 px-6 bg-muted/30 overflow-hidden">
      <GradientOrbs />
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="grid md:grid-cols-[auto_1fr] gap-12 items-start"
        >
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/avatar.jpg"
                alt={siteConfig.name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              {siteConfig.location}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">{t("title")}</h2>
            <div className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              <TypewriterText text={t("bio")} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
