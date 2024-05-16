import { type InputHTMLAttributes, memo, useState, useRef, useEffect } from 'react'
import React from 'react'
import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  type?: string
  autofocus?: boolean
  placeholder?: string
}

export const Input = memo((props: InputProps) => {
  const {
    className = '',
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props

  const [currentPosition, setCurrentPosition] = useState(0)
  const [isFocused, setIsFocused] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autofocus])

  const onBlur = () => setIsFocused(false)

  const onFocus = () => setIsFocused(true)

  const onSelect = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setCurrentPosition(e?.target?.selectionStart || 0)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value) // прокидываем актуальное значение из поля в метод onchange
    setCurrentPosition(e.target.value.length)
  }

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          onChange={onChangeHandler}
          type={type}
          value={value}
          className={cls.input}
          {...otherProps}
        />
        {isFocused && (
          <span className={cls.caret} style={{ left: `${currentPosition * 9.7}px` }} />
        )}
      </div>
    </div>
  )
})
