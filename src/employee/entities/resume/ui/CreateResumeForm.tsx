import { useGetMe } from "@employee/entities/employee/model/useGetMe"
import { useCreateResume } from "../model/useCreateResume"
import { FormFields, ResumeForm } from "./ResumeForm"
import { useAppDispatch } from "@shared/shared/hooks/storeHooks"
import { closeMenu } from "@shared/entities/ui/model/UiSlice"
import { useEffect } from "react"

export const CreateResumeForm = () => {
  const dispatch = useAppDispatch()

  const { me } = useGetMe()
  const { createResume, isSuccess } = useCreateResume()

  useEffect(() => {
    dispatch(closeMenu("resumeModal"))
  }, [isSuccess])

  const onSubmit = (dto: FormFields) => {
    if (!me) return
    createResume({ ...dto, employeeId: me.id })
  }

  return <ResumeForm onSubmit={onSubmit} />
}
