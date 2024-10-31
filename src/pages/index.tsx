import { Route, Routes, useNavigate } from "react-router-dom"
import AppLayout from "../app/layout/AppLayout.tsx"
import { useEffect } from "react"
import { JobListPage } from "./employee/JobListPage.tsx"
import { MainLayout } from "../app/layout/MainLayout.tsx"
import { JobPostPage } from "./employee/JobPostPage.tsx"
import { ApplicationsPage } from "./employee/ApplicationsPage.tsx"

export const Routing = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // navigate("/job-list")
  }, [])

  const employeeRoutes = [
    {
      path: "/job-list",
      element: (
        <MainLayout>
          <JobListPage />
        </MainLayout>
      ),
    },
    {
      path: "/job-list/:id",
      element: (
        <MainLayout>
          <JobPostPage />
        </MainLayout>
      ),
    },
    {
      path: "/resume",
      element: (
        <MainLayout>
          <div>resume</div>
        </MainLayout>
      ),
    },
    {
      path: "/profile",
      element: (
        <MainLayout>
          <div>resume</div>
        </MainLayout>
      ),
    },
    {
      path: "/applications/:type",
      element: (
        <MainLayout>
          <ApplicationsPage />
        </MainLayout>
      ),
    },
    {
      path: "/applications/me/:id",
      element: (
        <MainLayout>
          <JobPostPage />
        </MainLayout>
      ),
    },
    {
      path: "/applications/employers/:id",
      element: (
        <MainLayout>
          <JobListPage />
        </MainLayout>
      ),
    },
  ]

  return (
    <>
      <AppLayout>
        <Routes>
          {employeeRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </AppLayout>
    </>
  )
}
