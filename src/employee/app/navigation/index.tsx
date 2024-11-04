import { Route, RouteObject } from "react-router-dom"
import { authNavigation } from "./Auth"
import { rootNavigation } from "./Root"

export const employeeNavigation = (
  <Route path="employee">
    {authNavigation}
    {rootNavigation}
  </Route>
)
