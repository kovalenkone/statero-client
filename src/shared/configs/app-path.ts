const pathWithParams = (url: string, params?: Record<string, string>) => {
  if (!params) return url
  return `${url}?${new URLSearchParams(params)}`
}

export const AppPath = {
  root: '/',

  login: '/login',
  register: '/register',
  verify: '/verify',
  verifyWithEmail: (email: string) => pathWithParams('/verify', { email }),

  overview: '/overview',
  inbox: '/inbox',

  tasks: '/tasks',
  task: (id: string) => `/tasks/:${id}`,

  projects: '/projects',
  project: (id: string) => `/projects/${id}`,

  archive: '/archive',
} as const
