import { useToast } from "@shared/shared/modules/toast"
import { useUpdateMeMutation } from "../api/EmployeeApi"
import { UpdateMeDto } from "../types"
import { useEffect } from "react"

export const useUpdateMe = () => {
  const [updateMe, { isLoading, isError, error, isSuccess }] =
    useUpdateMeMutation()

  const { openToast } = useToast()

  useEffect(() => {
    if (isLoading) return

    if (isSuccess) {
      openToast({ content: "Данные успешно обновлены", type: "info" })
    }
    if (isError) {
      openToast({
        content: error?.message || "Ошибка обновления данных",
        type: "error",
      })
    }
  }, [isLoading, isSuccess])

  const update = (dto: UpdateMeDto) => {
    updateMe(dto)
  }

  return { update, isLoading, isError, error, isSuccess }
}
