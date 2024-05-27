import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { memo, useMemo, useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import { SidebarItemsList } from 'widgets/Sidebar/model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SideBarProps {
  className?: string
}

export const Sidebar = memo(({ className = '' }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  const itemsList = useMemo(
    () =>
      SidebarItemsList.map((item) => (
        <SidebarItem collapsed={collapsed} key={item.path} item={item} />
      )),
    [collapsed],
  )

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        square
        size={ButtonSize.L}
        theme={ThemeButton.BACKGROUND_INVERTED}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>{itemsList}</div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  )
})
