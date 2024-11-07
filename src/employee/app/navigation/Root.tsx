import { ApplicationsPage } from "@employee/pages/ApplicationsPage"
import { JobListPage } from "@employee/pages/JobListPage"
import { JobPostPage } from "@employee/pages/JobPostPage"
import { ProfilePage } from "@employee/pages/ProfilePage"
import { ResumePage } from "@employee/pages/ResumePage"
import { Route, RouteObject } from "react-router-dom"
import { EmployeeAuthLayout } from "../../app/layout/AuthLayout"
import { MainLayout } from "@employee/app/layout/MainLayout"
import { EmployerProfilePage } from "@employee/pages/EmployerProfilePage"

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
    path: "profile/employer/:id",
    element: <EmployerProfilePage />,
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
