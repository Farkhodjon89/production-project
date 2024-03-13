import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'

interface SideBarProps {
  className?: string
}

export const Sidebar = ({ className = '' }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={onToggle}>toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}
