import { Route, RouteObject } from "react-router-dom"
import { authNavigation } from "./Auth"
import { rootNavigation } from "./Root"

export const employerNavigation = (
  <Route path="employer">
    {authNavigation}
    {rootNavigation}
  </Route>
)
