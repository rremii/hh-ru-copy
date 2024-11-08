import { Api, ApiEmployee, ApiEmployer } from "@shared/shared/api/config/Api"
import { Resume } from "@shared/entities/resume/types"
import { GetResumeResponse } from "../types"

export const ResumeApi = ApiEmployer.injectEndpoints({
  endpoints: (build) => ({
    getResume: build.query<GetResumeResponse, number>({
      query: (resumeId) => ({
        url: `resume/` + resumeId,
        method: "GET",
        prefix: "employer/",
      }),
      providesTags: ["Resume"],
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
