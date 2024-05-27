import { Link, type LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  children?: React.ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className = '',
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
})
