import { api } from '@/shared/api/api'
import { ApiPath } from '@/shared/api/api-path'
import type { ILoginData } from './types/login.type'
import type { IRegisterData } from './types/register.type'
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
}
