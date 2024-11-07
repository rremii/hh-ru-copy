import { Api, ApiEmployee } from "@shared/shared/api/config/Api"
import { Employee } from "@shared/entities/employee/types"
import { UpdateMeDto } from "../types"

export const EmployeeApi = ApiEmployee.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<Employee, void>({
      query: () => ({
        url: "me",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    updateMe: build.mutation<Employee, UpdateMeDto>({
      query: (loginData) => ({
        url: "me",
        method: "PUT",
        data: loginData,
      }),
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: true,
})
export const { useGetMeQuery, useUpdateMeMutation } = EmployeeApi
