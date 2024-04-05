import { createPortal } from 'react-dom'

interface PortalProps {
  children: React.ReactNode // Компонент который телепортируем
  element?: HTMLElement // Место куда телепортируем
}

export const Portal = (props: PortalProps) => {
  const { children, element = document.body } = props
  return createPortal(children, element)
}
