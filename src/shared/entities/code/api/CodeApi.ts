import { Api } from "@shared/shared/api/config/Api"
import { DefaultResponse } from "@shared/shared/api/config/types"

export const CodeApi = Api.injectEndpoints({
  endpoints: (build) => ({
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
    }),
  }),
})
export const { useConfirmEmailMutation, useVerifyCodeMutation } = CodeApi
