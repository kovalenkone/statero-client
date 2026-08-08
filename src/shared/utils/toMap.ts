export const toMap = <T, U = T>(
  items: T[],
  getKey: (item: T) => string,
  getValue: (item: T) => U = item => item as unknown as U,
): Record<string, U> => {
  const result: Record<string, U> = {}

  for (const item of items) {
    result[getKey(item)] = getValue(item)
  }

  return result
}
