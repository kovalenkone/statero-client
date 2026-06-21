import { useState } from 'react'

export const useDisclosure = (
  initialState: boolean,
  callbacks?: {
    onOpen?(): void
    onClose?(): void
  },
): [
  boolean,
  {
    open: () => void
    close: () => void
    toggle: () => void
  },
] => {
  const [isOpen, setIsOpen] = useState(initialState)

  const open = () => {
    if (isOpen) return

    setIsOpen(true)

    if (callbacks?.onOpen) {
      callbacks?.onOpen()
    }
  }

  const close = () => {
    if (!isOpen) return

    setIsOpen(false)

    if (callbacks?.onClose) {
      callbacks?.onClose()
    }
  }

  const toggle = () => {
    setIsOpen(prev => !prev)

    if (isOpen) {
      close()
    } else {
      open()
    }
  }

  return [isOpen, { open, close, toggle }]
}
