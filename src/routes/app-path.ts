export const AppPath = {
  root: '/',

  login: '/login',
  register: '/register',

  overview: '/overview',
  inbox: '/inbox',

  tasks: '/tasks',
  task: (id: string) => `/tasks/:${id}`,

  projects: '/projects',
  project: (id: string) => `/projects/${id}`,

  archive: '/archive',
} as const
