import { Api } from "@shared/shared/api/config/Api"
import { LoginDto, RegisterDto } from "../types"
import { AuthResponse } from "@shared/entities/auth/types"
import { DefaultResponse } from "@shared/shared/api/config/types"

export const AuthApi = Api.injectEndpoints({
  endpoints: (build) => ({
    registerEmployer: build.mutation<AuthResponse, RegisterDto>({
      query: (registerData: RegisterDto) => ({
        url: "auth/register/employer",
        method: "POST",
        data: registerData,
      }),
    }),
    loginEmployer: build.mutation<AuthResponse, LoginDto>({
      query: (loginData) => ({
        url: "auth/login",
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["User"],
    }),

    logoutEmployer: build.mutation<DefaultResponse, void>({
      query: () => ({
        url: "auth/logout",
        method: "DELETE",
      }),
    }),

    refreshEmployer: build.query<AuthResponse, void>({
      query: () => ({
        url: "auth/refresh/employer",
        method: "GET",
      }),
    }),
  }),
})
export const {
  useLogoutEmployerMutation,
  useLoginEmployerMutation,
  useRegisterEmployerMutation,
  useRefreshEmployerQuery,
} = AuthApi
