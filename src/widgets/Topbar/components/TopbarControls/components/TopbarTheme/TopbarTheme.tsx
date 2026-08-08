import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
import { ActionButton } from '@/shared/ui/ActionButton'
import { SunIcon } from 'lucide-react'

const TopbarTheme = () => {
  return (
    <ActionButton>
      <SunIcon size={ICON_SIZE.xl} />
    </ActionButton>
  )
}

export { TopbarTheme }
