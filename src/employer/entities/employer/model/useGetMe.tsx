import { useGetMeQuery } from "../api/EmployerApi"

export const useGetMe = () => {
  const { data: me, isFetching, isSuccess, error } = useGetMeQuery()

  return { me, isFetching, isSuccess, error }
}
