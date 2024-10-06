import { background } from '../../data/background'

export function formatTool(tool: keyof typeof background) {
  return background[tool] || tool
}
