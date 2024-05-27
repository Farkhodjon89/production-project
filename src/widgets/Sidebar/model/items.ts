import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'

export interface SidebarItemType {
  path: string
  icon: React.VFC<React.SVGProps<SVGSVGElement>>
  text: string
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    icon: MainIcon,
    text: 'Главная',
  },
  {
    path: RoutePath.about,
    icon: AboutIcon,
    text: 'О Сайте',
  },
  {
    path: RoutePath.profile,
    icon: ProfileIcon,
    text: 'Профиль',
  },
]
