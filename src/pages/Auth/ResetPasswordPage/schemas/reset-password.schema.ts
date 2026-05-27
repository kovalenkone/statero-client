import { VALIDATION_MESSAGE } from '@/shared/constants/messages.constant'
import z from 'zod'

export const resetPasswordSchema = z.object({
  password: z.string().min(8, VALIDATION_MESSAGE.MIN_PASSWORD),
  confirmPassword: z
    .string()
    .min(1, VALIDATION_MESSAGE.REQUIRED_CONFIRM_PASSWORD),
})

export type TResetPassword = z.infer<typeof resetPasswordSchema>
