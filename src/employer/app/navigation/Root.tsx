import { Route, RouteObject } from "react-router-dom"
import { EmployerAuthLayout } from "../layout/AuthLayout"
import { MainLayout } from "@employer/app/layout/MainLayout"
import { ApplicationsPage } from "@employer/pages/ApplicationsPage"
import { JobPostsPage } from "@employer/pages/JobPostsPage"

const routes: RouteObject[] = [
  {
    path: "",
    element: <div>not implemented</div>,
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
    element: <div>not implemented</div>,
  },
  {
    path: "resumes/:id",
    element: <div>not implemented</div>,
  },
  {
    path: "applications/:type",
    element: <ApplicationsPage />,
  },
  {
    path: "applications/me/:id",
    element: <div>not implemented</div>,
  },
  {
    path: "applications/employees/:id",
    element: <div>not implemented</div>,
  },
  {
    path: "profile",
    element: <div>not implemented</div>,
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
