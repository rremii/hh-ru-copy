import { Api } from "@shared/api/config/Api.ts"
import { AuthResponse, DefaultResponse, LoginDto, RegisterDto } from "../types"

export const AuthApi = Api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<AuthResponse, RegisterDto>({
      query: (registerData: RegisterDto) => ({
        url: "auth/register/employee",
        method: "POST",
        data: registerData,
      }),
    }),
    login: build.mutation<AuthResponse, LoginDto>({
      query: (loginData) => ({
        url: "auth/login",
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["User"],
    }),
    confirmEmail: build.mutation<DefaultResponse, string>({
      query: (email) => ({
        url: "code/send-code",
        method: "POST",
        data: { email },
      }),
    }),

    verifyCode: build.mutation<DefaultResponse, string>({
      query: (code) => ({
        url: "code/verify-code",
        method: "POST",
        data: { code },
      }),
      invalidatesTags: ["User"],
    }),
    logout: build.mutation<DefaultResponse, void>({
      query: () => ({
        url: "auth/logout",
        method: "DELETE",
      }),
    }),

    refresh: build.query<AuthResponse, void>({
      query: () => ({
        url: "auth/refresh",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
})
export const { refresh } = AuthApi.endpoints
export const {
  useRefreshQuery,
  useRegisterMutation,
  useLoginMutation,
  useConfirmEmailMutation,
  useVerifyCodeMutation,
  useLogoutMutation,
} = AuthApi
