import { useGetEmployerQuery } from "../api/EmployerApi"

export const useGetEmployer = (id?: number) => {
  const {
    data: employer,
    isFetching,
    isSuccess,
    error,
  } = useGetEmployerQuery(id as number, { skip: !id })

  return { employer, isFetching, isSuccess, error }
}
