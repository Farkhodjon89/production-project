/* eslint-disable @typescript-eslint/indent */
import { lazy, type MemoExoticComponent } from 'react'
import { type LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm'

export const LoginFormAsync = lazy(
  async () =>
    await new Promise<{
      default: MemoExoticComponent<({ className }: LoginFormProps) => JSX.Element>
    }>((resolve) => {
      setTimeout(() => {
        void import('./LoginForm').then((module) => resolve({ default: module.default }))
      }, 1500)
    }),
)
