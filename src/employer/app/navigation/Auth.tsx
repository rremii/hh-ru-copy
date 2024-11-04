import { LoginPage } from "@employer/pages/LoginPage"
import { SignUpCodePage } from "@employer/pages/SignUpCodePage"
import { SignUpEmailPage } from "@employer/pages/SignUpEmailPage"
import { SignUpInfoPage } from "@employer/pages/SignUpInfoPage"
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
