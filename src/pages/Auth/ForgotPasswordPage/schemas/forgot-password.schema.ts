import { VALIDATION_MESSAGE } from '@/shared/constants/messages.constant'
import z from 'zod'

export const forgotPasswordSchema = z.object({
  email: z.email(VALIDATION_MESSAGE.WRONG_EMAIL),
})

export type TForgotPasswordData = z.infer<typeof forgotPasswordSchema>
