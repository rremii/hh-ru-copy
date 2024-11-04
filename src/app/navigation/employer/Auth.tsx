import { Route, RouteObject } from "react-router-dom"

const routes = [
  {
    path: "login",
    element: <div>Login</div>,
  },
  {
    path: "register/email",
    element: <div>email</div>,
  },
  {
    path: "register/code",
    element: <div>code</div>,
  },
  {
    path: "register/info",
    element: <div>info</div>,
  },
]

export const authNavigation = (
  <Route path="auth">
    {routes.map((route, index) => (
      <Route key={index} {...route} />
    ))}
  </Route>
)
