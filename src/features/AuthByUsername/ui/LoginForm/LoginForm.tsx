import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { loginActions } from '../../model/slice/loginSlice'

export interface LoginFormProps {
  className?: string
}

const LoginForm = memo(({ className = '' }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, isLoading, error } = useSelector(getLoginState)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch],
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch],
  )

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && (
        <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />
      )}
      <Input
        autofocus
        type="text"
        onChange={onChangeUsername}
        placeholder={t('Введите email')}
        className={cls.input}
        value={username}
      />
      <Input
        onChange={onChangePassword}
        type="text"
        placeholder={t('Введите пароль')}
        className={cls.input}
        value={password}
      />
      <Button
        disabled={isLoading}
        theme={ThemeButton.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
      >
        {t('Войти')}
      </Button>
    </div>
  )
})

export default LoginForm
