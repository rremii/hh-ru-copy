import { Api } from "@shared/shared/api/config/Api"
import { LoginDto, RegisterDto } from "../types"
import { AuthResponse } from "@shared/entities/auth/types"
import { DefaultResponse } from "@shared/shared/api/config/types"

export const AuthApi = Api.injectEndpoints({
  endpoints: (build) => ({
    registerEmployee: build.mutation<AuthResponse, RegisterDto>({
      query: (registerData: RegisterDto) => ({
        url: "auth/register/employee",
        method: "POST",
        data: registerData,
      }),
    }),
    loginEmployee: build.mutation<AuthResponse, LoginDto>({
      query: (loginData) => ({
        url: "auth/login",
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["User"],
    }),
    confirmEmailEmployee: build.mutation<DefaultResponse, string>({
      query: (email) => ({
        url: "code/send-code",
        method: "POST",
        data: { email },
      }),
    }),

    verifyCodeEmployee: build.mutation<DefaultResponse, string>({
      query: (code) => ({
        url: "code/verify-code",
        method: "POST",
        data: { code },
      }),
      invalidatesTags: ["User"],
    }),
    logoutEmployee: build.mutation<DefaultResponse, void>({
      query: () => ({
        url: "auth/logout",
        method: "DELETE",
      }),
    }),

    refreshEmployee: build.query<AuthResponse, void>({
      query: () => ({
        url: "auth/refresh/employee",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: true,
})
export const {
  useRefreshEmployeeQuery,
  useRegisterEmployeeMutation,
  useLoginEmployeeMutation,
  useConfirmEmailEmployeeMutation,
  useVerifyCodeEmployeeMutation,
  useLogoutEmployeeMutation,
} = AuthApi
