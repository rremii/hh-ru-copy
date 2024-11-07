import { Api, ApiEmployee } from "@shared/shared/api/config/Api"
import { Employer } from "@shared/entities/employer/types"

export const EmployerApi = ApiEmployee.injectEndpoints({
  endpoints: (build) => ({
    getEmployer: build.query<Employer, number>({
      query: (id) => ({
        url: "" + id,
        method: "GET",
        prefix: "employer/",
      }),
      providesTags: ["User"],
    }),
  }),
  overrideExisting: true,
})
export const { useGetEmployerQuery } = EmployerApi
