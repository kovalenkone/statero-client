import { AppPath } from '@/shared/constants/app-path.constant'
import { lazy } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import { authMiddleware } from './middlewares/auth.middleware'

const AppLayout = lazy(() => import('@/layouts/AppLayout'))
const AuthLayout = lazy(() => import('@/layouts/AuthLayout'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const RegisterPage = lazy(() => import('@/pages/RegisterPage'))
const TasksPage = lazy(() => import('@/pages/TasksPage'))
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'))
const Task = lazy(() => import('@/modules/Task'))

export const AppRouter = () => {
  const location = useLocation()
  const backgroundLocation = location.state?.background

  return (
    <>
      <Routes location={backgroundLocation || location}>
        <Route element={<AppLayout />} middleware={[authMiddleware]}>
          <Route
            path={AppPath.Root}
            element={<Navigate to={AppPath.Tasks} />}
          />
          <Route path={AppPath.Tasks} element={<TasksPage />} />
          <Route path={AppPath.Projects} element={<ProjectsPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={AppPath.Login} element={<LoginPage />} />
          <Route path={AppPath.Register} element={<RegisterPage />} />
        </Route>
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route path='/task/:id' element={<Task />} />
        </Routes>
      )}
    </>
  )
}
