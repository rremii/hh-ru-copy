import { useGetMeQuery } from "../api/EmployeeApi"

export const useGetMe = () => {
  const { data: me, isFetching, isSuccess, error } = useGetMeQuery()

  return { me }
}
