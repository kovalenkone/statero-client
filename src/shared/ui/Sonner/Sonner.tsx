import { ICON_SIZE } from '@/shared/constants/icon-size.constant'
import {
  CircleCheckIcon,
  CircleXIcon,
  InfoIcon,
  TriangleAlertIcon,
} from 'lucide-react'
import { Toaster, type ToasterProps } from 'sonner'
import styles from './sonner.module.scss'

const SOONER_ICON_SIZE = ICON_SIZE.lg

const Sonner = ({ ...props }: ToasterProps) => {
  return (
    <Toaster
      theme='system'
      position='top-right'
      duration={1000}
      richColors
      swipeDirections={['right']}
      className={styles.sonner}
      icons={{
        success: <CircleCheckIcon size={SOONER_ICON_SIZE} />,
        info: <InfoIcon size={SOONER_ICON_SIZE} />,
        warning: <TriangleAlertIcon size={SOONER_ICON_SIZE} />,
        error: <CircleXIcon size={SOONER_ICON_SIZE} />,
      }}
      {...props}
    />
  )
}

export { Sonner }
