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
    deleteResumeApplication: build.mutation<ResumeApplication, number>({
      query: (applicationId) => ({
        url: "resume-application/" + applicationId,
        method: "DELETE",
        prefix: "employer/",
      }),
      invalidatesTags: ["ResumeApplication"],
    }),
  }),
})
export const {
  useGetMyResumeApplicationsQuery,
  useDeleteResumeApplicationMutation,
} = ResumeApplicationApi
