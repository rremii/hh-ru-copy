import { Api } from "@shared/api/config/Api.ts"
import { AuthResponse, DefaultResponse, LoginDto, RegisterDto } from "../types"

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
    confirmEmailEmployer: build.mutation<DefaultResponse, string>({
      query: (email) => ({
        url: "code/send-code",
        method: "POST",
        data: { email },
      }),
    }),

    verifyCodeEmployer: build.mutation<DefaultResponse, string>({
      query: (code) => ({
        url: "code/verify-code",
        method: "POST",
        data: { code },
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
  // overrideExisting: true,
})
export const {
  useConfirmEmailEmployerMutation,
  useLogoutEmployerMutation,
  useLoginEmployerMutation,
  useRegisterEmployerMutation,
  useRefreshEmployerQuery,
  useVerifyCodeEmployerMutation,
} = AuthApi
