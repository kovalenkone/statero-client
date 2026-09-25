import { Anchor } from '@/shared/ui/Anchor'
import { Button } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'
import { Title } from '@/shared/ui/Title'
import type { PropsWithChildren } from 'react'
import styles from './authcard.module.scss'

const AuthCard = ({ children }: PropsWithChildren) => {
  return <div className={styles.authCard}>{children}</div>
}

interface IAuthCardHeadProps {
  title: string
  descr: string
}
const AuthCardHead = ({ title, descr }: IAuthCardHeadProps) => {
  return (
    <div className={styles.authCardHead}>
      <Title fz='lg'>{title}</Title>
      <Text color='muted'>{descr}</Text>
    </div>
  )
}

interface IAuthCardFormProps {
  onSubmit: () => void
}
const AuthCardForm = ({
  onSubmit,
  children,
}: PropsWithChildren<IAuthCardFormProps>) => {
  return (
    <form onSubmit={onSubmit}>
      <div className={styles.authCardInner}>{children}</div>
    </form>
  )
}

const AuthCardFields = ({ children }: PropsWithChildren) => {
  return <div className={styles.authCardFields}>{children}</div>
}

interface IAuthCardSubmit {
  label: string
  prending?: boolean
}
const AuthCardSubmit = ({ label, prending }: IAuthCardSubmit) => {
  return (
    <Button type='submit' size='xl' stretch loading={prending}>
      {label}
    </Button>
  )
}

interface IAuthCardLink {
  text: string
  link: {
    href: string
    label: string
  }
}
const AuthCardLink = ({ text, link }: IAuthCardLink) => {
  return (
    <Text color='muted'>
      {text}{' '}
      <Anchor color='muted' to={link.href}>
        {link.label}
      </Anchor>
    </Text>
  )
}

AuthCard.Head = AuthCardHead
AuthCard.Form = AuthCardForm
AuthCard.Fields = AuthCardFields
AuthCard.Submit = AuthCardSubmit
AuthCard.Link = AuthCardLink

export { AuthCard }
