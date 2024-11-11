import { Api, ApiEmployee, ApiEmployer } from "@shared/shared/api/config/Api"
import { Employer } from "@shared/entities/employer/types"
import { UpdateEmployerDto } from "../types"

export const EmployerApi = ApiEmployer.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<Employer, void>({
      query: () => ({
        url: "me",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    updateMe: build.mutation<Employer, UpdateEmployerDto>({
      query: (dto) => ({
        url: "me",
        method: "PUT",
        data: dto,
      }),
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: true,
})
export const { useGetMeQuery, useUpdateMeMutation } = EmployerApi
