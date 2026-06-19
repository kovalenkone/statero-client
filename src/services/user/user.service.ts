import type { IUser } from '@/entities/user/user.type'
import { api } from '@/shared/api/api'
import { ApiPath } from '@/shared/api/api-path'

export const UserService = {
  me: () => api.get<IUser>(ApiPath.user.me),
}
