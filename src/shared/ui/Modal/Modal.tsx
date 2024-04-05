import { Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const TIMER_INTERVAL = 300

export const Modal = (props: ModalProps) => {
  const { className = '', children, isOpen, onClose } = props
  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const { theme } = useTheme()

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        // таймер позволяет нам закрывать модалку не сразу а через 300 мс
        onClose()
        setIsClosing(false)
      }, TIMER_INTERVAL)
    }
  }, [onClose])

  // Новые ссылки!
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeHandler()
    },
    [closeHandler],
  )

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      if (timerRef.current !== undefined) {
        clearTimeout(timerRef.current)
      }
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
    [cls[theme]]: true,
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div onClick={closeHandler} className={cls.overlay}>
          <div onClick={onContentClick} className={cls.content}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
