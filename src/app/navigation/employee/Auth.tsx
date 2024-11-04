import { Route, RouteObject } from "react-router-dom"
import { LoginPage } from "../../../pages/employee/LoginPage"
import { SignUpEmailPage } from "../../../pages/employee/SignUpEmailPage"
import { SignUpCodePage } from "../../../pages/employee/SignUpCodePage"
import { SignUpInfoPage } from "../../../pages/employee/SignUpInfoPage"

const routes = [
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register/email",
    element: <SignUpEmailPage />,
  },
  {
    path: "register/code",
    element: <SignUpCodePage />,
  },
  {
    path: "register/info",
    element: <SignUpInfoPage />,
  },
]

export const authNavigation = (
  <Route path="auth">
    {routes.map((route, index) => (
      <Route key={index} {...route} />
    ))}
  </Route>
)
