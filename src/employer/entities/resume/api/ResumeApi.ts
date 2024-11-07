import { Api, ApiEmployee, ApiEmployer } from "@shared/shared/api/config/Api"
import { JobPost } from "@shared/entities/jobPost/types"
import { Resume } from "@shared/entities/resume/types"

export const ResumeApi = ApiEmployer.injectEndpoints({
  endpoints: (build) => ({
    getResume: build.query<Resume, number>({
      query: (resumeId) => ({
        url: `resume/` + resumeId,
        method: "GET",
        prefix: "employee/",
      }),
    }),
    getResumes: build.query<Resume[], void>({
      query: () => ({
        url: `resume`,
        method: "GET",
        prefix: "employee/",
      }),
    }),
  }),
  overrideExisting: true,
})
export const { useGetResumeQuery, useGetResumesQuery } = ResumeApi
