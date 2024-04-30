/* eslint-disable @typescript-eslint/indent */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { userActions, type User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>('login/loginByUsername', async (authData, thunkAPI) => {
  try {
    const response = await axios.post<User>('http://localhost:8000/login', authData)

    if (!response.data) {
      throw new Error()
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))

    thunkAPI.dispatch(userActions.setAuthUser(response.data))

    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue('error')
  }
})
