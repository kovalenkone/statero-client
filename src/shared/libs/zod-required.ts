interface IZReq {
  req: string
  type: string
}

export const zReq = ({ req, type }: IZReq) => ({
  error: ({ input }: { input: unknown }) => (input === '' ? req : type),
})
