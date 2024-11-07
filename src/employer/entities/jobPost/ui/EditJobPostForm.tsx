import { JobPost } from "@shared/entities/jobPost/types"
import { FormFields, JobPostForm } from "./JobPostForm"
import { useUpdateJobPost } from "../model/useUpdateJobPost"
import { useAppDispatch } from "@shared/shared/hooks/storeHooks"
import { useEffect } from "react"
import { closeMenu } from "@shared/entities/ui/model/UiSlice"

interface Props extends JobPost {}

export const EditJobPostForm = ({
  title,
  id,
  description,
  employerId,
  requirements,
  salary,
}: Props) => {
  const dispatch = useAppDispatch()

  const { updateJobPost, isSuccess, isLoading } = useUpdateJobPost()

  useEffect(() => {
    if (!isSuccess) return
    dispatch(closeMenu("jobPostModal"))
  }, [isSuccess])

  const onSubmit = (dto: FormFields) => {
    updateJobPost({ ...dto, id })
  }

  return (
    <JobPostForm
      isLoading={isLoading}
      description={description}
      requirements={requirements}
      salary={salary}
      title={title}
      onSubmit={onSubmit}
    />
  )
}
