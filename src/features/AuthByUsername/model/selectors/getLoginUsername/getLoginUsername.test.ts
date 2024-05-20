import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername.test', () => {
  test('should return error', () => {
    const state = {
      loginForm: {
        username: '123123',
      },
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('123123')
  })

  test('should work with empty state', () => {
    const state = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
