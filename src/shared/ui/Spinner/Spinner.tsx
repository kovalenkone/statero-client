import styles from './spinner.module.scss'

interface ISpinnerProps {
  size?: 'sm' | 'md' | 'lg'
}

const Spinner = ({ size }: ISpinnerProps) => {
  return <span className={styles.spinner} />
}

export { Spinner }
