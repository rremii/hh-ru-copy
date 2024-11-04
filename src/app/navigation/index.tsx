import { Routes } from "react-router-dom"
import { employeeNavigation } from "./employee/index.tsx"
import { welcomeNavigation } from "./welcome/welcome.tsx"
import { employerNavigation } from "./employer/index.tsx"

export const Navigation = () => {
  return (
    <Routes>
      {welcomeNavigation}
      {employeeNavigation}
      {employerNavigation}
    </Routes>
  )
}
