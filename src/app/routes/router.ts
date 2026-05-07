import { createBrowserRouter } from 'react-router-dom'
import { AppRoutes, AuthRoutes } from './routes'

export const router = createBrowserRouter([AuthRoutes, AppRoutes])
