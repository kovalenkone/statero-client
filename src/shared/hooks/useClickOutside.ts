import { useEffect, useEffectEvent, useRef } from 'react'

type TEventType = MouseEvent | TouchEvent

export const useClickOutside = <T extends HTMLElement>(
  callback: (event: TEventType) => void,
) => {
  const ref = useRef<T>(null)

  const listener = useEffectEvent((event: Event) => {
    const { target } = event

    const shouldIgnore =
      !document.body.contains(target as Node) &&
      (target as Element)?.tagName !== 'HTML'

    if (shouldIgnore) {
      return
    }

    const path = event.composedPath()

    if (ref.current && !path.includes(ref.current)) {
      callback(event as TEventType)
    }
  })

  useEffect(() => {
    document.addEventListener('mousedown', listener)

    return () => {
      document.addEventListener('mousedown', listener)
    }
  }, [])

  return ref
}
