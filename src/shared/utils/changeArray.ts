interface IChangeArrayReturn<T> {
  add: (value: T) => T[]
  remove: (index: number) => T[]
  update: (value: T, callback: (value: T) => string | number) => T[]
}

export const changeArray = <T>(initialArray: T[]): IChangeArrayReturn<T> => {
  const add = (value: T) => {
    return [...initialArray, value]
  }

  const remove = (index: number) => {
    return initialArray.filter((_, i) => i !== index)
  }

  const update = (value: T, callback: (value: T) => string | number) => {
    const index = initialArray.findIndex(
      item => callback(item) === callback(value),
    )

    if (index !== -1) {
      return remove(index)
    } else {
      return add(value)
    }
  }

  return {
    add,
    remove,
    update,
  }
}
