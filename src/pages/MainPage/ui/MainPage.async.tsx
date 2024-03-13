import { lazy } from 'react'

export const MainPageAsync = lazy(
  async () =>
    await new Promise<{ default: () => JSX.Element }>((resolve) => {
      setTimeout(() => {
        resolve(import('./MainPage'))
      }, 1500)
    })
)
