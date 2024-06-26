import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import type { CounterSchema } from 'entities/Counter'
import type { ProfileSchema } from 'entities/Profile'
import type { UserSchema } from 'entities/User'
import type { LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Асинхронные редьюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}
