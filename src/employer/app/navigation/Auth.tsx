import { LoginPage } from "@employer/pages/LoginPage"
import { SignUpCodePage } from "@employer/pages/SignUpCodePage"
import { SignUpEmailPage } from "@employer/pages/SignUpEmailPage"
import { SignUpInfoPage } from "@employer/pages/SignUpInfoPage"
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
