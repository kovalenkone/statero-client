import { api } from '@/shared/api/api'
import { ApiPath } from '@/shared/api/api-path'
import type { IForgotPasswordData } from './types/forgot-password'
import type { ILoginData } from './types/login.type'
import type { IRegisterData } from './types/register.type'
import type { IResetPasswordData } from './types/reset-password'
import type { IVerifyData } from './types/verify.type'

export const AuthService = {
  login: (data: ILoginData) => {
    return api.post(ApiPath.auth.login, data)
  },

  register: (data: IRegisterData) => {
    return api.post(ApiPath.auth.register, data)
  },

  verify: (data: IVerifyData) => {
    return api.post(ApiPath.auth.verify, data)
  },

  forgotPassword: (data: IForgotPasswordData) => {
    return api.post(ApiPath.auth.forgotPassword, data)
  },

  resetPassword: (data: IResetPasswordData) => {
    return api.post(ApiPath.auth.resetPassword, data)
  },
}
