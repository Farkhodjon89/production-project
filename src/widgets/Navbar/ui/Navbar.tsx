import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useCallback, useState } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation()

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button theme={ThemeButton.CLEAR_INVERTED} onClick={onToggleModal}>
          {t('Войти')}
        </Button>
      </div>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos animi,
        vel, totam voluptate laborum earum odio officia inventore sit libero
        quia, sapiente ipsum possimus doloremque adipisci nobis nulla eveniet
        quibusdam.
      </Modal>
    </div>
  )
}
