"use client"

import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/portfolio"

export function Projects() {
  const t = useTranslations("projects")

  return (
    <section id="projects" className="py-24 px-6 bg-muted/20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12">{t("title")}</h2>
          <div className="flex flex-col divide-y divide-border/60">
            {projects.map((project, i) => (
              <motion.a
                key={project.key}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group py-8 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start gap-4 cursor-pointer"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
                      {project.name}
                    </h3>
                    <ArrowUpRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                    {t(project.key as Parameters<typeof t>[0])}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
