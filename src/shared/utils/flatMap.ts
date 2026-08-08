export const flatMap = <T, U>(items: T[], callback: (item: T) => U[]): U[] => {
  return items.flatMap(item => callback(item))
}
