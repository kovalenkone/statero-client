import { AppPath } from '@/shared/configs/app-path'
import { lazy } from 'react'
import { redirect, type RouteObject } from 'react-router-dom'
import { authMiddleware } from './middlewares/auth.middleware'

const AppLayout = lazy(() => import('@/layouts/AppLayout'))
const AuthLayout = lazy(() => import('@/layouts/AuthLayout'))

const LoginPage = lazy(() => import('@/pages/LoginPage'))
const RegisterPage = lazy(() => import('@/pages/RegisterPage'))
const VerifyEmailPage = lazy(() => import('@/pages/VerifyEmailPage'))

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
      path: AppPath.root,
      loader: () => redirect(AppPath.overview),
    },
    {
      path: AppPath.overview,
      Component: OverviewPage,
    },
    {
      path: AppPath.inbox,
      Component: InboxPage,
    },
    {
      path: AppPath.tasks,
      Component: TasksPage,
    },
    {
      path: AppPath.projects,
      Component: ProjectsPage,
    },
    {
      path: AppPath.archive,
      Component: ArchivePage,
    },
  ],
}

export const AuthRoutes: RouteObject = {
  Component: AuthLayout,
  children: [
    {
      path: AppPath.login,
      Component: LoginPage,
    },
    {
      path: AppPath.register,
      Component: RegisterPage,
    },
    {
      path: AppPath.verify,
      Component: VerifyEmailPage,
    },
  ],
}
