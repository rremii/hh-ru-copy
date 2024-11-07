import { ApiEmployer } from "@shared/shared/api/config/Api"
import { LoginDto, RegisterDto } from "../types"
import { AuthResponse } from "@shared/entities/auth/types"
import { DefaultResponse } from "@shared/shared/api/config/types"

export const AuthApi = ApiEmployer.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<AuthResponse, RegisterDto>({
      query: (registerData: RegisterDto) => ({
        url: "auth/register/employer",
        method: "POST",
        data: registerData,
        prefix: "",
      }),
    }),
    login: build.mutation<AuthResponse, LoginDto>({
      query: (loginData) => ({
        url: "auth/login",
        method: "POST",
        data: loginData,
        prefix: "",
      }),
      invalidatesTags: ["User"],
    }),

    logout: build.mutation<DefaultResponse, void>({
      query: () => ({
        url: "auth/logout",
        method: "DELETE",
        prefix: "",
      }),
    }),

    refresh: build.query<AuthResponse, void>({
      query: () => ({
        url: "auth/refresh/employer",
        method: "GET",
        prefix: "",
      }),
    }),
  }),
})
export const {
  useLogoutMutation,
  useLoginMutation,
  useRegisterMutation,
  useRefreshQuery,
} = AuthApi
