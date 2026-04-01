import { EyeClosedIcon, EyeIcon } from 'lucide-react'
import { useState, type ComponentProps } from 'react'
import { Input } from '../Input'
import styles from './passwordinput.module.scss'

interface IPasswordInputProps
  extends Omit<ComponentProps<'input'>, 'size' | 'type'> {
  label?: string
  size?: 'sm' | 'md' | 'lg'
  error?: string
}

const PasswordInput = ({ ...props }: IPasswordInputProps) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Input
      {...props}
      type={isVisible ? 'text' : 'password'}
      rightSection={
        <button
          type='button'
          className={styles.passwordEye}
          onClick={() => setIsVisible(cur => !cur)}
        >
          {isVisible ? <EyeIcon /> : <EyeClosedIcon />}
        </button>
      }
    />
  )
}

export { PasswordInput }
