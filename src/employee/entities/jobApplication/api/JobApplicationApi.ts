import { ApiEmployee } from "@shared/shared/api/config/Api"
import { JobApplication } from "@shared/entities/jobApplication/types"
import { CreateJobApplicationDto } from "../types"

export const JobApplicationApi = ApiEmployee.injectEndpoints({
  endpoints: (build) => ({
    createJobApplication: build.mutation<
      JobApplication,
      CreateJobApplicationDto
    >({
      query: (dto) => ({
        url: "me/job-application",
        method: "POST",
        data: dto,
      }),
    }),
    getMyJobApplications: build.query<JobApplication[], void>({
      query: () => ({
        url: "me/job-application",
        method: "GET",
      }),
    }),
  }),
})
export const { useCreateJobApplicationMutation, useGetMyJobApplicationsQuery } =
  JobApplicationApi
