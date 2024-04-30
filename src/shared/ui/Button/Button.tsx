import { type ButtonHTMLAttributes, type FC } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import React from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    theme = '',
    square,
    size = ButtonSize.M,
    children,
    disabled,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
