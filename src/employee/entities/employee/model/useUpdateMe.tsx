import { useUpdateMeMutation } from "../api/EmployeeApi"
import { UpdateMeDto } from "../types"

export const useUpdateMe = () => {
  const [updateMe, { isLoading, isError, error, isSuccess }] =
    useUpdateMeMutation()

  const update = (dto: UpdateMeDto) => {
    updateMe(dto)
  }

  return { update, isLoading, isError, error, isSuccess }
}
