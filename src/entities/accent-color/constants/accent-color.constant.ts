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
