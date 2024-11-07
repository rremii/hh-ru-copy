import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { reviewSchema } from "../constants/reviewSchema"
import { useGetMe } from "@employee/entities/employee/model/useGetMe"
import { FormField } from "@shared/shared/ui/FormField"
import { Button } from "@shared/shared/button"
import styled from "styled-components"

interface FormFields {
  comment: string
}

interface Props {
  employerId?: number
}

export const CreateReviewForm = ({ employerId }: Props) => {
  const { me } = useGetMe()

  const {
    clearErrors,
    reset,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(reviewSchema),
    defaultValues: {
      comment: "",
    },
  })

  const onSubmit = (dto: FormFields) => {
    if (!employerId || !me) return
    console.log(dto)
  }

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <FormField
        textarea
        isError={Boolean(errors.root) || Boolean(errors.comment)}
        input={{
          placeholder: "Enter your opinion",
          register: { ...register("comment") },
        }}
      />

      <div className="btn-section">
        <Button type="filled" rounded>
          Отправить
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
