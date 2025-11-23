export const AppPath = {
  Root: '/',
  Basename: '/app',

  Login: '/login',
  Register: '/register',

  Overview: '/overview',

  Tasks: '/tasks',
  Task: (id: string) => `/tasks/:${id}`,

  Projects: '/projects',
  Project: (id: string) => `/projects/${id}`,
} as const
