import { Route, RouteObject } from "react-router-dom"
import { LoginPage } from "../../../pages/employer/LoginPage"
import { SignUpEmailPage } from "../../../pages/employer/SignUpEmailPage"
import { SignUpCodePage } from "../../../pages/employer/SignUpCodePage"
import { SignUpInfoPage } from "../../../pages/employer/SignUpInfoPage"

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
