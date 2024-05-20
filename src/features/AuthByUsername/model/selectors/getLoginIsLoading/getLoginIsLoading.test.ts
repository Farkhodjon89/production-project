import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading.test', () => {
  test('should return true', () => {
    const state = {
      loginForm: {
        isLoading: true,
      },
    }
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
  })

  test('should work with empty state', () => {
    const state = {}
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
  })
})
