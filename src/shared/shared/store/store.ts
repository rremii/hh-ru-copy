import { EmployeeAuthReducer } from "@employee/entities/auth/model/AuthSlice"
import { EmployerAuthReducer } from "@employer/entities/auth/model/AuthSlice"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { UiReducer } from "@shared/entities/ui/model/UiSlice"
import { Api, ApiEmployee, ApiEmployer } from "../api/config/Api"

const rootReducer = combineReducers({
  Ui: UiReducer,
  EmployeeAuth: EmployeeAuthReducer,
  EmployerAuth: EmployerAuthReducer,
  [Api.reducerPath]: Api.reducer,
  [ApiEmployer.reducerPath]: ApiEmployer.reducer,
  [ApiEmployee.reducerPath]: ApiEmployee.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(Api.middleware)
        .concat(ApiEmployer.middleware)
        .concat(ApiEmployee.middleware),
    devTools: true,
  })
}

export const store = setupStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
