import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useCallback, useState } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
    setIsAuthModal(false)
  }, [dispatch])

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button
          className={cls.links}
          theme={ThemeButton.CLEAR_INVERTED}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
        d
      </div>
    )
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      {/* <div className={cls.links}> */}
      <Button
        className={cls.links}
        theme={ThemeButton.CLEAR_INVERTED}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {/* </div> */}
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}
