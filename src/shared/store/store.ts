import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { Api } from "@shared/api/config/Api.ts"
import { UiReducer } from "@entities/ui/model/UiSlice.ts"
import { AuthReducer, AuthSlice } from "@entities/auth-employee/model/AuthSlice"

const rootReducer = combineReducers({
  Ui: UiReducer,
  Auth: AuthReducer,
  [Api.reducerPath]: Api.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(Api.middleware),
    devTools: true,
  })
}

export const store = setupStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
