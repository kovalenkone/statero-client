import type { IWorkspace } from '../workspace/workspace.type'

export interface IUser {
  id: string
  email: string
  name: string
  surname: string
  avatar: string | null

  workspaces: IWorkspace[]

  isTwoFactorEnabled: boolean
}
