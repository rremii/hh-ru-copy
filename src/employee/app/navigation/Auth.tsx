import { LoginPage } from "@employee/pages/LoginPage"
import { SignUpCodePage } from "@employee/pages/SignUpCodePage"
import { SignUpEmailPage } from "@employee/pages/SignUpEmailPage"
import { SignUpInfoPage } from "@employee/pages/SignUpInfoPage"
import { Route } from "react-router-dom"

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
