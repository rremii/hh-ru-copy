import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { Api } from "@shared/api/config/Api.ts"
import { UiReducer } from "@entities/ui/model/UiSlice.ts"

const rootReducer = combineReducers({
  Ui: UiReducer,
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

export type RootState = ReturnType<typeof rootReducer>
