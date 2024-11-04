import { Route, RouteObject } from "react-router-dom"
import { EmployerAuthLayout } from "../layout/AuthLayout"
import { MainLayout } from "@root/app/layout/MainLayout"

const routes: RouteObject[] = [
  {
    path: "",
    element: (
      <div>
        <h1>Hello</h1>
      </div>
    ),
  },
  // {
  //   path: "job-list/:id",
  //   element: (
  //     <MainLayout>
  //       <JobPostPage />
  //     </MainLayout>
  //   ),
  // },
  // {
  //   path: "resume",
  //   element: (
  //     <MainLayout>
  //       <ResumePage />
  //     </MainLayout>
  //   ),
  // },
  // {
  //   path: "profile",
  //   element: (
  //     <MainLayout>
  //       <ProfilePage />
  //     </MainLayout>
  //   ),
  // },
  // {
  //   path: "applications/:type",
  //   element: (
  //     <MainLayout>
  //       <ApplicationsPage />
  //     </MainLayout>
  //   ),
  // },
  // {
  //   path: "applications/me/:id",
  //   element: (
  //     <MainLayout>
  //       <JobPostPage />
  //     </MainLayout>
  //   ),
  // },
  // {
  //   path: "applications/employers/:id",
  //   element: (
  //     <MainLayout>
  //       <JobListPage />
  //     </MainLayout>
  //   ),
  // },
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
