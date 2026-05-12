"use client"

import { useRef } from "react"
import { motion, useScroll } from "motion/react"
import { ExternalLink } from "lucide-react"
import { useTranslations } from "next-intl"
import { experiences } from "@/data/portfolio"
import { TechIcon } from "@/components/tech-icon"

const spring = { type: "spring", stiffness: 90, damping: 18 } as const

export function Experience() {
  const t = useTranslations("experience")
  const listRef = useRef<HTMLDivElement>(null)

  // Scroll-linked progress for the timeline line (gsap-scrolltrigger pattern via Framer Motion)
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.85", "end 0.45"],
  })

  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">

        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={spring}
        >
          {t("title")}
        </motion.h2>

        {/* Timeline container */}
        <div ref={listRef} className="relative pl-5">

          {/* Track line — faint static guide */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          {/* Progress line — draws down as the section scrolls into view */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px bg-indigo-400/60"
            style={{ scaleY: scrollYProgress, transformOrigin: "top center" }}
          />

          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.key}
                className="relative py-8 pl-8"
                initial={{ opacity: 0, x: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ ...spring, delay: i * 0.08 }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-indigo-400 transition-colors duration-200"
                    >
                      {exp.company}
                      <ExternalLink className="size-3.5 opacity-0 group-hover:opacity-60 transition-opacity duration-200" />
                    </a>
                    <p className="text-sm text-muted-foreground mt-0.5">{exp.role}</p>
                  </div>
                  <span className="text-sm text-muted-foreground tabular-nums shrink-0 sm:text-right">
                    {exp.start} — {exp.end}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-2xl">
                  {t(exp.key as Parameters<typeof t>[0])}
                </p>

                {/* Tech stack */}
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
        </div>

      </div>
    </section>
  )
}
