import logo from '@/shared/assets/images/statera-logo.svg'
import { Title } from '@/shared/ui/Title'
import styles from './apploader.module.scss'

const AppLoader = () => {
  return (
    <div className={styles.appLoader}>
      <img className={styles.appLoaderLogo} src={logo} alt='Statero logo' />
      <Title fz='xl'>STATERO</Title>
    </div>
  )
}

export { AppLoader }
