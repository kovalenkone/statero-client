import { AppPath } from '@/shared/constants/app-path.constant'
import { lazy } from 'react'
import { redirect, type RouteObject } from 'react-router-dom'
import { authMiddleware } from './middlewares/auth.middleware'

const AppLayout = lazy(() => import('@/layouts/AppLayout'))
const AuthLayout = lazy(() => import('@/layouts/AuthLayout'))

const LoginPage = lazy(() => import('@/pages/LoginPage'))
const RegisterPage = lazy(() => import('@/pages/RegisterPage'))

const OverviewPage = lazy(() => import('@/pages/OverviewPage'))
const InboxPage = lazy(() => import('@/pages/InboxPage'))

const TasksPage = lazy(() => import('@/pages/TasksPage'))
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'))

const ArchivePage = lazy(() => import('@/pages/ArchivePage'))

export const AppRoutes: RouteObject = {
  Component: AppLayout,
  middleware: [authMiddleware],
  children: [
    {
      path: AppPath.Root,
      loader: () => redirect(AppPath.Overview),
    },
    {
      path: AppPath.Overview,
      Component: OverviewPage,
    },
    {
      path: AppPath.Inbox,
      Component: InboxPage,
    },
    {
      path: AppPath.Tasks,
      Component: TasksPage,
    },
    {
      path: AppPath.Projects,
      Component: ProjectsPage,
    },
    {
      path: AppPath.Archive,
      Component: ArchivePage,
    },
  ],
}

export const AuthRoutes: RouteObject = {
  Component: AuthLayout,
  children: [
    {
      path: AppPath.Login,
      Component: LoginPage,
    },
    {
      path: AppPath.Register,
      Component: RegisterPage,
    },
  ],
}
