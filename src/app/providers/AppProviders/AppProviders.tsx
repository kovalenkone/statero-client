import type { PropsWithChildren } from 'react'
import { QueryProvider } from '../QueryProvider'

const AppProviders = ({ children }: PropsWithChildren) => {
  return <QueryProvider>{children}</QueryProvider>
}

export { AppProviders }
