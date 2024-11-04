import { Routes } from "react-router-dom"
import { welcomeNavigation } from "./welcome"
import { employeeNavigation } from "@employee/app/navigation"
import { employerNavigation } from "@employer/app/navigation"

export const Navigation = () => {
  return (
    <Routes>
      {welcomeNavigation}
      {employeeNavigation}
      {employerNavigation}
    </Routes>
  )
}
