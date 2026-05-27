import { AppPath } from '@/shared/configs/app-path'
import { lazy } from 'react'
import { redirect, type RouteObject } from 'react-router-dom'
import { authMiddleware } from './middlewares/auth.middleware'
import { verifyMiddleware } from './middlewares/verify.middleware'

// Layouts
const AppLayout = lazy(() => import('@/layouts/AppLayout'))
const AuthLayout = lazy(() => import('@/layouts/AuthLayout'))

// Auth Pages
const LoginPage = lazy(() => import('@/pages/Auth/LoginPage'))
const RegisterPage = lazy(() => import('@/pages/Auth/RegisterPage'))
const VerifyEmailPage = lazy(() => import('@/pages/Auth/VerifyEmailPage'))
const ForgotPasswordPage = lazy(() => import('@/pages/Auth/ForgotPasswordPage'))
const ResetPasswordPage = lazy(() => import('@/pages/Auth/ResetPasswordPage'))

// App Pages
const OverviewPage = lazy(() => import('@/pages/App/OverviewPage'))
const InboxPage = lazy(() => import('@/pages/App/InboxPage'))

const TasksPage = lazy(() => import('@/pages/App/TasksPage'))
const ProjectsPage = lazy(() => import('@/pages/App/ProjectsPage'))

const ArchivePage = lazy(() => import('@/pages/App/ArchivePage'))

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
      path: AppPath.verifyEmail,
      Component: VerifyEmailPage,
      middleware: [verifyMiddleware],
    },
    {
      path: AppPath.forgotPassword,
      Component: ForgotPasswordPage,
    },
    {
      path: AppPath.resetPassword,
      Component: ResetPasswordPage,
    },
  ],
}
