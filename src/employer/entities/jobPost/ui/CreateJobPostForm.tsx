import { FormFields, JobPostForm } from "./JobPostForm"

export const CreateJobPostForm = () => {
  const onSubmit = (dto: FormFields) => {
    console.log(dto)
  }

  return <JobPostForm onSubmit={onSubmit} />
}
