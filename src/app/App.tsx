import { AppLoader } from '@/shared/components/AppLoader'
import { Sonner } from '@/shared/ui/Sonner'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { AppProviders } from './providers'
import { router } from './routes/router'

function App() {
  return (
    <AppProviders>
      <Suspense fallback={<AppLoader />}>
        <RouterProvider router={router} />
      </Suspense>
      <Sonner />
    </AppProviders>
  )
}

export default App
