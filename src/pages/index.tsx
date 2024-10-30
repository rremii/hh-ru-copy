import { Route, Routes } from "react-router-dom"
import AppLayout from "../app/layout/AppLayout.tsx"
import { useToast } from "@shared/modules/toast/index.ts"
import { useEffect } from "react"

export const Routing = () => {
  const { openToast } = useToast()

  return (
    <>
      <AppLayout>
        {/* <Routes>
          <Route path="/profile" element={<ProfilePageWithAuth />} />
          <Route
            path="/*"
            element={
              <Layout>
                <ColorsPage />
              </Layout>
            }
          />
        </Routes> */}
      </AppLayout>
    </>
  )
}
