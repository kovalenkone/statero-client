import {
  ACCENT_COLORS,
  type TAccentColor,
} from '../constants/accent-color.constant'

export const getAccentColor = (color?: TAccentColor) => {
  if (!color) return ''

  return ACCENT_COLORS[color]
}
