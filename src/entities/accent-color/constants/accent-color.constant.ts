export const AccentColor = {
  Blue: 'blue',
  Violet: 'violet',
  Orange: 'orange',
  Green: 'green',
  Yellow: 'yellow',
  Grey: 'grey',
  Red: 'red',
} as const

export type TAccentColor = (typeof AccentColor)[keyof typeof AccentColor]

export const ACCENT_COLORS = {
  blue: 'var(--blue)',
  violet: 'var(--violet)',
  orange: 'var(--orange)',
  green: 'var(--green)',
  yellow: 'var(--yellow)',
  grey: 'var(--grey)',
  red: 'var(--red)',
} as const satisfies Record<TAccentColor, string>
