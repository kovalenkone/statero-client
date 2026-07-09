import { ActionButton } from '@/shared/ui/ActionButton'
import { LanguagesIcon } from 'lucide-react'

const TopbarLanguage = () => {
  return (
    <ActionButton>
      <LanguagesIcon size={20} />
    </ActionButton>
  )
}

export { TopbarLanguage }
