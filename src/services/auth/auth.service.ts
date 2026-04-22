import { api } from '../api'
import { ApiPath } from '../api-path'
import type { TLoginData } from './types/login.type'
import type { TRegisterData } from './types/register.type'

export const AuthService = {
  login: (data: TLoginData) => {
    api.post(ApiPath.auth.login, data)
  },

  register: (data: TRegisterData) => {
    api.post(ApiPath.auth.register, data)
  },
}
