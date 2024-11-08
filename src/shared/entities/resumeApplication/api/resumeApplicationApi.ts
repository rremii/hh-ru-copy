import { Api, ApiEmployee, ApiEmployer } from "@shared/shared/api/config/Api"
import { ResumeApplication } from "@shared/entities/resumeApplication/types"
import { CreateResumeApplicationDto } from "../types"

export const ResumeApplicationApi = ApiEmployer.injectEndpoints({
  endpoints: (build) => ({
    deleteResumeApplication: build.mutation<ResumeApplication, number>({
      query: (applicationId) => ({
        url: "resume-application/" + applicationId,
        method: "DELETE",
      }),
      invalidatesTags: ["ResumeApplication", "Resume"],
    }),
  }),
  overrideExisting: true,
})
export const { useDeleteResumeApplicationMutation } = ResumeApplicationApi
