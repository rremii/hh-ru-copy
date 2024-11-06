import { FormFields, ResumeForm } from "./ResumeForm"

export const CreateResumeForm = () => {
  const onSubmit = (dto: FormFields) => {
    console.log(dto)
  }

  return <ResumeForm onSubmit={onSubmit} />
}
