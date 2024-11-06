import { JobPost } from "@shared/entities/jobPost/types"
import { FormFields, JobPostForm } from "./JobPostForm"

interface Props extends JobPost {}

export const EditJobPostForm = ({
  title,
  id,
  description,
  employerId,
  requirements,
  salary,
}: Props) => {
  const onSubmit = (dto: FormFields) => {
    console.log(dto)
  }

  return (
    <JobPostForm
      description={description}
      requirements={requirements}
      salary={salary}
      title={title}
      onSubmit={onSubmit}
    />
  )
}
