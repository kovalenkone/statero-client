import { ApiPath } from '../api-path'
import type { TLoginData } from './types/login.type'
import type { TRegisterData } from './types/register.type'

export const AuthService = {
  Login: (data: TLoginData) => {
    console.log('Login Data', ApiPath.Login, data)
  },

  Register: (data: TRegisterData) => {
    console.log('Register Data', ApiPath.Register, data)
  },
}
