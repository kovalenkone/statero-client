import { useMatch, useResolvedPath } from 'react-router-dom'

interface IUsePathMatchProps {
  path: string
  end?: boolean
}

export const usePathMatch = ({ path, end = false }: IUsePathMatchProps) => {
  const resolved = useResolvedPath(path)
  const match = useMatch({ path: resolved.pathname, end })

  return !!match
}
