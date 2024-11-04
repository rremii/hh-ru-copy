import { Route, RouteObject } from "react-router-dom"
import { ApplicationsPage } from "../../../pages/employee/ApplicationsPage"
import { JobListPage } from "../../../pages/employee/JobListPage"
import { JobPostPage } from "../../../pages/employee/JobPostPage"
import { ProfilePage } from "../../../pages/employee/ProfilePage"
import { ResumePage } from "../../../pages/employee/ResumePage"
import { MainLayout } from "../../layout/MainLayout"
import { EmployeeAuthLayout } from "../../layout/employee/AuthLayout"

const routes = [
  {
    path: "",
    element: <JobListPage />,
  },
  {
    path: "job-list",
    element: <JobListPage />,
  },
  {
    path: "job-list/:id",
    element: <JobPostPage />,
  },
  {
    path: "resume",
    element: <ResumePage />,
  },
  {
    path: "profile",
    element: <ProfilePage />,
  },
  {
    path: "applications/:type",
    element: <ApplicationsPage />,
  },
  {
    path: "applications/me/:id",
    element: <JobPostPage />,
  },
  {
    path: "applications/employers/:id",
    element: <JobListPage />,
  },
]

export const rootNavigation = (
  <Route path="">
    {routes.map(({ element, path }, index) => (
      <Route
        key={index}
        path={path}
        element={
          <EmployeeAuthLayout>
            <MainLayout>{element}</MainLayout>
          </EmployeeAuthLayout>
        }
      />
    ))}
  </Route>
)
