import { useGetMe } from "@employer/entities/employer/model/useGetMe"
import { FormFields, JobPostForm } from "./JobPostForm"
import { useCreateJobPost } from "../model/useCreateJobPost"
import { useEffect } from "react"
import { useAppDispatch } from "@shared/shared/hooks/storeHooks"
import { closeMenu } from "@shared/entities/ui/model/UiSlice"

export const CreateJobPostForm = () => {
  const dispatch = useAppDispatch()
  const { me } = useGetMe()

  const { createJobPost, isSuccess } = useCreateJobPost()

  useEffect(() => {
    if (!isSuccess) return
    dispatch(closeMenu("jobPostModal"))
  }, [isSuccess])

  const onSubmit = (dto: FormFields) => {
    if (!me) return

    createJobPost({ ...dto, salary: Number(dto.salary) })
  }

  return <JobPostForm onSubmit={onSubmit} />
}
