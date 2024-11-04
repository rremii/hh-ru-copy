import {
  useVerifyCodeEmployerMutation,
  useVerifyCodeMutation,
} from "../api/AuthApi"

export const useVerifyCode = () => {
  const [verifyCode, { isLoading, isError, isSuccess, error }] =
    useVerifyCodeEmployerMutation()

  const handleVerify = async (code: string) => {
    return verifyCode(code).unwrap()
  }

  return {
    verifyCode: handleVerify,
    isLoading,
    isError,
    isSuccess,
    error,
  }
}
