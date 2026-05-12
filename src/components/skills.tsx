"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import { skills } from "@/data/portfolio"
import { TechIcon } from "@/components/tech-icon"
import { DotGrid } from "@/components/dot-grid"

const spring = { type: "spring", stiffness: 90, damping: 18 } as const

export function Skills() {
  const t = useTranslations("skills")

  return (
    <section id="skills" className="relative py-24 px-6 bg-muted/30 overflow-hidden">
      <DotGrid />
      <div className="relative mx-auto max-w-3xl">

        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={spring}
        >
          {t("title")}
        </motion.h2>

        <div className="flex flex-col gap-10">
          {skills.map((group, i) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, x: -20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...spring, delay: i * 0.08 }}
            >
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                {t(group.key as Parameters<typeof t>[0])}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, j) => (
                  <motion.span
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-background px-3 py-1.5 text-sm font-medium cursor-default hover:border-indigo-400/50 hover:text-foreground transition-colors duration-200"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...spring, delay: i * 0.08 + j * 0.04 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <TechIcon name={skill} className="size-4 shrink-0" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
