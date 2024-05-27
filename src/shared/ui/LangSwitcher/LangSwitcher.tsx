import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from '../Button/Button'
import { memo } from 'react'

interface LangSwitcherProps {
  className: string
  short?: boolean
}

export const LangSwitcher = memo(({ className = '', short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  )
})
