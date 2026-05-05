"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import { skills } from "@/data/portfolio"
import { TechIcon } from "@/components/tech-icon"
import { DotGrid } from "@/components/dot-grid"

export function Skills() {
  const t = useTranslations("skills")

  return (
    <section id="skills" className="relative py-24 px-6 bg-muted/30 overflow-hidden">
      <DotGrid />
      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl font-bold mb-12">{t("title")}</h2>
          <div className="w-full flex flex-col gap-10">
            {skills.map((group, i) => (
              <motion.div
                key={group.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
              >
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                  {t(group.key as Parameters<typeof t>[0])}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-background px-3 py-1.5 text-sm font-medium"
                    >
                      <TechIcon name={skill} className="size-4 shrink-0" />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
