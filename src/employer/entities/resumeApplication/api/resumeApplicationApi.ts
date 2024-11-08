import { Api, ApiEmployee, ApiEmployer } from "@shared/shared/api/config/Api"
import { ResumeApplication } from "@shared/entities/resumeApplication/types"
import { CreateResumeApplicationDto } from "../types"

export const ResumeApplicationApi = ApiEmployer.injectEndpoints({
  endpoints: (build) => ({
    getMyResumeApplications: build.query<ResumeApplication[], void>({
      query: () => ({
        url: `me/resume-application`,
        method: "GET",
      }),
      providesTags: ["ResumeApplication"],
    }),
    createResumeApplication: build.mutation<
      ResumeApplication,
      CreateResumeApplicationDto
    >({
      query: (dto) => ({
        url: "me/resume-application",
        method: "POST",
        data: dto,
        prefix: "employer/",
      }),
      invalidatesTags: ["ResumeApplication", "Resume"],
    }),
  }),
  overrideExisting: true,
})
export const {
  useGetMyResumeApplicationsQuery,
  useCreateResumeApplicationMutation,
} = ResumeApplicationApi
