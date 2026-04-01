import { VALIDATION_MESSAGE } from '@/shared/constants/messages.constant'
import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.email(VALIDATION_MESSAGE.WRONG_EMAIL),
  password: z.string().min(1, VALIDATION_MESSAGE.REQUIRED_PASSWORD),
})

export type TLoginData = z.infer<typeof LoginSchema>

export interface ILoginResponse {
  user: string
}
