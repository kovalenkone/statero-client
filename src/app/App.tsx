import { Sonner } from '@/shared/ui/Sonner'
import { RouterProvider } from 'react-router-dom'
import { AppProviders } from './providers'
import { router } from './routes/router'

function App() {
  return (
    <AppProviders>
      <RouterProvider router={router} />
      <Sonner />
    </AppProviders>
  )
}

export default App
