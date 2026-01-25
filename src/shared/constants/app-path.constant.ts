export const AppBasename = '/app'

export const AppPath = {
  Root: '/',

  Login: '/login',
  Register: '/register',

  Overview: '/overview',
  Inbox: '/inbox',

  Tasks: '/tasks',
  Task: (id: string) => `/tasks/:${id}`,

  Projects: '/projects',
  Project: (id: string) => `/projects/${id}`,

  Archive: '/archive',
} as const
