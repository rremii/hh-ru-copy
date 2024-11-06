import { useForm } from "react-hook-form"
import { applyToResumeSchema } from "../constants/applyToResumeSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import styled from "styled-components"
import { Button } from "@shared/shared/button"
import { FormField } from "@shared/shared/ui/FormField"

interface FormFields {
  coverLetter: string
}

interface Props {
  resumeId?: number
  onCancel?: () => void
}

export const ApplyToResumeForm = ({ resumeId, onCancel }: Props) => {
  const {
    clearErrors,
    reset,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(applyToResumeSchema),
    defaultValues: {
      coverLetter: "",
    },
  })

  const onSubmit = (dto: FormFields) => {
    if (!resumeId) return
    console.log(dto)
  }

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (onCancel) onCancel()
    reset()
  }

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Cover letter"
        isError={Boolean(errors.root) || Boolean(errors.coverLetter)}
        input={{
          placeholder: "cover letter",
          register: { ...register("coverLetter") },
        }}
      />

      <div className="btn-section">
        <Button onClick={handleCancel} color="#878787" type="filled" rounded>
          Cancel
        </Button>
        <Button type="filled" rounded>
          Apply
        </Button>
      </div>
    </FormLayout>
  )
}
const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  .btn-section {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
`
