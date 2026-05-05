"use client"

import { motion } from "motion/react"
import { ExternalLink } from "lucide-react"
import { useTranslations } from "next-intl"
import { experiences } from "@/data/portfolio"
import { TechIcon } from "@/components/tech-icon"

export function Experience() {
  const t = useTranslations("experience")

  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-12">{t("title")}</h2>
          <div className="flex flex-col divide-y divide-border/60">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 3, delay: i * 0.15, ease: "easeOut" }}
                className="py-8 first:pt-0 last:pb-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-muted-foreground transition-colors"
                    >
                      {exp.company}
                      <ExternalLink className="size-3.5 opacity-0 group-hover:opacity-60 transition-opacity" />
                    </a>
                    <p className="text-sm text-muted-foreground mt-0.5">{exp.role}</p>
                  </div>
                  <span className="text-sm text-muted-foreground tabular-nums shrink-0 sm:text-right">
                    {exp.start} — {exp.end}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-2xl">
                  {t(exp.key as Parameters<typeof t>[0])}
                </p>
                <div className="flex flex-wrap gap-3">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
                    >
                      <TechIcon name={tech} className="size-3.5 shrink-0" />
                      {tech}
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
