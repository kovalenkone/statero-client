import { usePathMatch } from '@/shared/hooks/usePathMatch'
import type { ILink } from '@/shared/types/link.type'
import { Button } from '@/shared/ui/Button'
import { Link } from 'react-router-dom'

interface ISidebarLink {
  link: ILink
}

const SidebarLink = ({ link }: ISidebarLink) => {
  const match = usePathMatch({ path: link.href })

  return (
    <Button asChild variant={match ? 'primary' : 'ghost'} disabled={match}>
      <Link to={link.href}>
        {link.icon && <link.icon />}
        {link.label}
      </Link>
    </Button>
  )
}

export { SidebarLink }
