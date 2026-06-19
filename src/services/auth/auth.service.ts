import { api } from '@/shared/api/api'
import { ApiPath } from '@/shared/api/api-path'
import type { IForgotPasswordData } from './types/forgot-password'
import type { ILoginData, ILoginResponse } from './types/login.type'
import type { IRefreshResponse } from './types/refresh.type'
import type { IRegisterData } from './types/register.type'
import type { IResetPasswordData } from './types/reset-password'
import type {
  IVerifyEmailData,
  IVerifyEmailResponse,
} from './types/verify.type'

export const AuthService = {
  login: (data: ILoginData): Promise<ILoginResponse> => {
    return api.post(ApiPath.auth.login, data)
  },

  register: (data: IRegisterData) => {
    return api.post(ApiPath.auth.register, data)
  },

  logout: () => api.post(ApiPath.auth.logout),

  refresh: (): Promise<IRefreshResponse> => {
    return api.post(ApiPath.auth.refresh)
  },

  verifyEmail: (data: IVerifyEmailData): Promise<IVerifyEmailResponse> => {
    return api.post(ApiPath.auth.verifyEmail, data)
  },

  forgotPassword: (data: IForgotPasswordData) => {
    return api.post(ApiPath.auth.forgotPassword, data)
  },

  resetPassword: (data: IResetPasswordData) => {
    return api.post(ApiPath.auth.resetPassword, data)
  },
}
