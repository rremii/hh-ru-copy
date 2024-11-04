import { Route, RouteObject } from "react-router-dom"
import { ApplicationsPage } from "../../../pages/employee/ApplicationsPage"
import { JobListPage } from "../../../pages/employee/JobListPage"
import { JobPostPage } from "../../../pages/employee/JobPostPage"
import { ProfilePage } from "../../../pages/employee/ProfilePage"
import { ResumePage } from "../../../pages/employee/ResumePage"
import { MainLayout } from "../../layout/MainLayout"

const routes: RouteObject[] = [
  // {
  //   path: "job-list",
  //   element: (
  //     <MainLayout>
  //       <JobListPage />
  //     </MainLayout>
  //   ),
  // },
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
    {routes.map((route, index) => (
      <Route key={index} {...route} />
    ))}
  </Route>
)
