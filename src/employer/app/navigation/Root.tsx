import { Route, RouteObject } from "react-router-dom"
import { EmployerAuthLayout } from "../layout/AuthLayout"
import { MainLayout } from "@employer/app/layout/MainLayout"
import { ApplicationsPage } from "@employer/pages/ApplicationsPage"
import { JobPostsPage } from "@employer/pages/JobPostsPage"
import { ResumesPage } from "@employer/pages/ResumesPage"
import { ResumePage } from "@employer/pages/ResumePage"
import { ProfilePage } from "@employer/pages/Profile"

const routes: RouteObject[] = [
  {
    path: "",
    element: <ResumesPage />,
  },
  {
    path: "job-posts",
    element: <JobPostsPage />,
  },
  {
    path: "job-posts/:id",
    element: <JobPostsPage />,
  },
  {
    path: "resumes",
    element: <ResumesPage />,
  },
  {
    path: "resumes/:id",
    element: <ResumePage />,
  },
  {
    path: "applications/:type",
    element: <ApplicationsPage />,
  },
  {
    path: "profile",
    element: <ProfilePage />,
  },
]

export const rootNavigation = (
  <Route path="">
    {routes.map(({ element, path }, index) => (
      <Route
        key={index}
        path={path}
        element={
          <EmployerAuthLayout>
            <MainLayout>{element}</MainLayout>
          </EmployerAuthLayout>
        }
      />
    ))}
  </Route>
)
