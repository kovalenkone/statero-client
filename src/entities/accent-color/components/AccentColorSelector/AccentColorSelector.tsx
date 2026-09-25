import { Popover } from '@/shared/ui/Popover'
import { objectEntries } from '@/shared/utils/objectEntries'
import { CheckIcon } from 'lucide-react'
import type { PropsWithChildren } from 'react'
import {
  ACCENT_COLORS,
  type TAccentColor,
} from '../../constants/accent-color.constant'
import styles from './accentcolorselector.module.scss'

interface IAccentColorSelectorProps {
  selectedColor?: TAccentColor
  onSelect: (color: TAccentColor) => void
}

const AccentColorSelector = ({
  selectedColor,
  onSelect,
  children,
}: PropsWithChildren<IAccentColorSelectorProps>) => {
  return (
    <Popover>
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Content sideOffset={8}>
        <div className={styles.accentColorSelector}>
          <ul className={styles.accentColorSelectorList}>
            {objectEntries(ACCENT_COLORS).map(([key, color]) => (
              <li key={key}>
                <button
                  className={styles.accentColorSelectorButton}
                  style={{ backgroundColor: color }}
                  onClick={() => onSelect(key)}
                >
                  {selectedColor === key && <CheckIcon size={8} />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Popover.Content>
    </Popover>
  )
}

export { AccentColorSelector }
