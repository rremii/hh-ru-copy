import { store } from "@shared/shared/store/store"
import { FC } from "react"
import { Provider } from "react-redux"

export const withStore = (Component: FC) => () =>
  (
    <Provider store={store}>
      <Component />
    </Provider>
  )
