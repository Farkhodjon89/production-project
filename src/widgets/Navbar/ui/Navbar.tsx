import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useCallback, useState } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button theme={ThemeButton.CLEAR_INVERTED} onClick={onShowModal}>
          {t('Войти')}
        </Button>
      </div>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}
