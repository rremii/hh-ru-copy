import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import styled from "styled-components"
import { Button } from "@shared/shared/button"
import { FormField } from "@shared/shared/ui/FormField"
import { applyToJobSchema } from "../constants/applyToJobSchema"
import { EventHandler } from "react"

interface FormFields {
  coverLetter: string
}

interface Props {
  jobPostId?: number
  onCancel?: () => void
}

export const ApplyToJobPostForm = ({ jobPostId, onCancel }: Props) => {
  const {
    clearErrors,
    reset,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(applyToJobSchema),
    defaultValues: {
      coverLetter: "",
    },
  })

  const onSubmit = (dto: FormFields) => {
    if (!jobPostId) return
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
        textarea
        label="Cover letter"
        isError={Boolean(errors.root) || Boolean(errors.coverLetter)}
        input={{
          placeholder: "cover letter",
          register: { ...register("coverLetter") },
        }}
      />

      <div className="btn-section">
        <Button
          onSubmit={handleCancel}
          onClick={handleCancel}
          color="#878787"
          type="filled"
          rounded
        >
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
