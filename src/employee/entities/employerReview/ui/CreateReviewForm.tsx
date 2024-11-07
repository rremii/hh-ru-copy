import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { reviewSchema } from "../constants/reviewSchema"
import { useGetMe } from "@employee/entities/employee/model/useGetMe"
import { FormField } from "@shared/shared/ui/FormField"
import { Button } from "@shared/shared/button"
import styled from "styled-components"
import { useCreateReview } from "../model/useCreateReview"
import { useEffect } from "react"
import { useAppDispatch } from "@shared/shared/hooks/storeHooks"

interface FormFields {
  comment: string
}

interface Props {
  employerId?: number
}

export const CreateReviewForm = ({ employerId }: Props) => {
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
  const { createReview, isSuccess, isLoading } = useCreateReview()
  const { me } = useGetMe()

  useEffect(() => {
    reset()
  }, [isSuccess])

  const onSubmit = (dto: FormFields) => {
    if (!employerId || !me) return

    createReview({ ...dto, employerId, employeeId: me.id })
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
        <Button actionType="submit" pending={isLoading} type="filled" rounded>
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
