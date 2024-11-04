import { EmployeeAuthReducer } from "@employee/entities/auth/model/AuthSlice"
import { EmployerAuthReducer } from "@employer/entities/auth/model/AuthSlice"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { UiReducer } from "@shared/entities/ui/model/UiSlice"
import { Api } from "../api/config/Api"

const rootReducer = combineReducers({
  Ui: UiReducer,
  EmployeeAuth: EmployeeAuthReducer,
  EmployerAuth: EmployerAuthReducer,
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
