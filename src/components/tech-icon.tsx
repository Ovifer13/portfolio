import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siGraphql,
  siTailwindcss,
  siNodedotjs,
  siChakraui,
  siPostgresql,
  siTestcafe,
} from "simple-icons"

const iconMap: Record<string, { path: string; hex: string; title: string }> = {
  "React": siReact,
  "Next.js": siNextdotjs,
  "TypeScript": siTypescript,
  "JavaScript": siJavascript,
  "GraphQL": siGraphql,
  "Tailwind CSS": siTailwindcss,
  "Node.js": siNodedotjs,
  "Chakra UI": siChakraui,
  "PostgreSQL": siPostgresql,
  "TestCafe": siTestcafe,
}

interface TechIconProps {
  name: string
  className?: string
}

function isTooDark(hex: string) {
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 < 40
}

export function TechIcon({ name, className = "size-3.5" }: TechIconProps) {
  const icon = iconMap[name]
  if (!icon) return null

  const fill = isTooDark(icon.hex) ? "currentColor" : `#${icon.hex}`

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ fill }}
      aria-label={name}
    >
      <path d={icon.path} />
    </svg>
  )
}
