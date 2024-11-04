import { FC, Suspense } from "react"
import { BrowserRouter, RouterProvider, Routes } from "react-router-dom"
import { router } from "../navigation"

export const withRouter = (Component: FC) => () =>
  (
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  )
// <RouterProvider router={router} />
