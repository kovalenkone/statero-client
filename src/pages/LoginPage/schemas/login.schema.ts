import { VALIDATION_MESSAGE } from '@/shared/constants/messages.constant'
import z from 'zod'

export const loginSchema = z.object({
  email: z.email(VALIDATION_MESSAGE.WRONG_EMAIL),
  password: z.string().min(1, VALIDATION_MESSAGE.REQUIRED_PASSWORD),
})

export type TLoginData = z.infer<typeof loginSchema>
