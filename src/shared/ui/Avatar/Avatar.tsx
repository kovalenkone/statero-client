import clsx from 'clsx'
import { Avatar as AvatarPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'
import styles from './avatar.module.scss'

interface IAvatarProps extends ComponentProps<typeof AvatarPrimitive.Root> {
  size?: 'sm' | 'md'
}

const Avatar = ({ size = 'md', className, ...props }: IAvatarProps) => {
  return (
    <AvatarPrimitive.Root
      className={clsx(styles.avatar, styles[`${size}Avatar`], className)}
      {...props}
    />
  )
}

const AvatarImage = ({
  className,
  ...props
}: ComponentProps<typeof AvatarPrimitive.Image>) => {
  return (
    <AvatarPrimitive.Image
      className={clsx(styles.avatarImage, className)}
      {...props}
    />
  )
}

const AvatarFallback = ({
  className,
  ...props
}: ComponentProps<typeof AvatarPrimitive.Fallback>) => {
  return (
    <AvatarPrimitive.Fallback
      className={clsx(styles.avatarFallback, className)}
      {...props}
    />
  )
}

Avatar.Image = AvatarImage
Avatar.Fallback = AvatarFallback

export { Avatar }
