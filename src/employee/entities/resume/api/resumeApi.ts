import { ApiEmployee } from "@shared/shared/api/config/Api"
import { Resume } from "@shared/entities/resume/types"
import { CreateResumeDto, UpdateResumeDto } from "../types"

export const ResumeApi = ApiEmployee.injectEndpoints({
  endpoints: (build) => ({
    createResume: build.mutation<Resume, CreateResumeDto>({
      query: (dto) => ({
        url: "me/resume",
        method: "POST",
        data: dto,
      }),
      invalidatesTags: ["Resume"],
    }),
    updateResume: build.mutation<Resume, UpdateResumeDto>({
      query: (dto) => ({
        url: "me/resume",
        method: "PUT",
        data: dto,
      }),
      invalidatesTags: ["Resume"],
    }),
    getMyResume: build.query<Resume, void>({
      query: () => ({
        url: "me/resume",
        method: "GET",
      }),
      providesTags: ["Resume"],
    }),
  }),
})
export const {
  useCreateResumeMutation,
  useUpdateResumeMutation,
  useGetMyResumeQuery,
} = ResumeApi
