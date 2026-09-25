import type { TAccentColor } from '../constants/accent-color.constant'

const ACCENT_COLORS = {
  blue: 'var(--blue)',
  violet: 'var(--violet)',
  orange: 'var(--orange)',
  green: 'var(--green)',
  yellow: 'var(--yellow)',
  grey: 'var(--grey)',
  red: 'var(--red)',
} as const satisfies Record<TAccentColor, string>

export const getAccentColor = (color: TAccentColor) => {
  return ACCENT_COLORS[color]
}
