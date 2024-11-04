import { LoginPage } from "@employee/pages/LoginPage"
import { SignUpCodePage } from "@employee/pages/SignUpCodePage"
import { SignUpEmailPage } from "@employee/pages/SignUpEmailPage"
import { SignUpInfoPage } from "@employee/pages/SignUpInfoPage"
import { GoToWelcomeLayout } from "@root/app/layout/GoToWelcomeLayout"
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
    {routes.map(({ element, path }, index) => (
      <Route
        key={index}
        path={path}
        element={<GoToWelcomeLayout>{element}</GoToWelcomeLayout>}
      />
    ))}
  </Route>
)
