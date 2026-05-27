import { VALIDATION_MESSAGE } from '@/shared/constants/messages.constant'
import z from 'zod'

export const registerSchema = z
  .object({
    name: z.string().min(2, VALIDATION_MESSAGE.MIN_NAME),
    surname: z.string().min(2, VALIDATION_MESSAGE.MIN_SURNAME),
    email: z.email(VALIDATION_MESSAGE.WRONG_EMAIL),
    password: z.string().min(8, VALIDATION_MESSAGE.MIN_PASSWORD),
    confirmPassword: z
      .string()
      .min(1, VALIDATION_MESSAGE.REQUIRED_CONFIRM_PASSWORD),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: VALIDATION_MESSAGE.UNCONFIRM_PASSWORDS,
    path: ['confirmPassword'],
  })

export type TRegisterData = z.infer<typeof registerSchema>
