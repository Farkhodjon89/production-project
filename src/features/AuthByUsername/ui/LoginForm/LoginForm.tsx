import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className = '' }: LoginFormProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autofocus
        type="text"
        placeholder={t('Введите email')}
        className={cls.input}
      />
      <Input type="text" placeholder={t('Введите пароль')} className={cls.input} />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  )
}
