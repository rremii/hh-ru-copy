import { ApiEmployee } from "@shared/shared/api/config/Api"
import { ResumeApplication } from "@shared/entities/resumeApplication/types"

export const ResumeApplicationApi = ApiEmployee.injectEndpoints({
  endpoints: (build) => ({
    getMyResumeApplications: build.query<ResumeApplication[], void>({
      query: () => ({
        url: "me/resume/resume-application",
        method: "GET",
      }),
      providesTags: ["ResumeApplication"],
    }),
  }),
})
export const { useGetMyResumeApplicationsQuery } = ResumeApplicationApi
