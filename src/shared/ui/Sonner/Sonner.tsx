import {
  CircleCheckIcon,
  CircleXIcon,
  InfoIcon,
  TriangleAlertIcon,
} from 'lucide-react'
import { Toaster, type ToasterProps } from 'sonner'
import styles from './sonner.module.scss'

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
        success: <CircleCheckIcon size={18} />,
        info: <InfoIcon size={18} />,
        warning: <TriangleAlertIcon size={18} />,
        error: <CircleXIcon size={18} />,
      }}
      {...props}
    />
  )
}

export { Sonner }
