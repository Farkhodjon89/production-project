import { lazy } from 'react'

export const LoginFormAsync = lazy(
  async () =>
    await new Promise<{ default: () => JSX.Element }>((resolve) => {
      setTimeout(() => {
        resolve(import('./LoginForm'))
      }, 1500)
    }),
)
