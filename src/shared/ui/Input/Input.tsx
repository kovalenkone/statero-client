import styles from './input.module.scss'

const Input = () => {
  return (
    <div>
      <input type='text' placeholder='Поиск' className={styles.input} />
    </div>
  )
}

export { Input }
