import logo from '@/shared/assets/images/statera-logo.svg'
import clsx from 'clsx'
import styles from './logo.module.scss'

interface ILogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'icon'
  className?: string
}

const Logo = ({ size = 'md', variant = 'default', className }: ILogoProps) => {
  const logoStyles = clsx(styles.logo, styles[`${size}Logo`], className)

  return (
    <div className={logoStyles}>
      <img src={logo} alt='Statero' />
      {variant === 'default' && <span>Statero</span>}
    </div>
  )
}

export { Logo }
