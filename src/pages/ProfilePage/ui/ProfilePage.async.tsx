import { lazy } from 'react'

export const ProfilePageAsync = lazy(
  async () =>
    await new Promise<{ default: () => JSX.Element }>((resolve) => {
      setTimeout(() => {
        resolve(import('./ProfilePage'))
      }, 1500)
    }),
)
