export const AppPath = {
  root: '/',

  // Auth path
  login: '/login',
  register: '/register',
  verifyEmail: '/verify-email',
  forgotPassword: '/forgot-password',
  verifyResetEmail: '/verify-reset-email',
  resetPassword: '/reset-password',

  // App path
  overview: '/overview',
  inbox: '/inbox',

  tasks: '/tasks',
  task: (id: string) => `/tasks/:${id}`,

  projects: '/projects',
  project: (id: string) => `/projects/${id}`,

  archive: '/archive',
} as const
