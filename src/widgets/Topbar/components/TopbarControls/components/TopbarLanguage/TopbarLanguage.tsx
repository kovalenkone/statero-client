import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
import { ActionButton } from '@/shared/ui/ActionButton'
import { LanguagesIcon } from 'lucide-react'

const TopbarLanguage = () => {
  return (
    <ActionButton>
      <LanguagesIcon size={ICON_SIZE.xl} />
    </ActionButton>
  )
}

export { TopbarLanguage }
