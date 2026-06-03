export interface IVerifyEmailData {
  email: string
  code: string
}

export interface IVerifyEmailResponse {
  accessToken: string
  refreshToken: string
}
