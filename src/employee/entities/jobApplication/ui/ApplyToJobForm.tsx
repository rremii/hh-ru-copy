import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import styled from "styled-components"
import { Button } from "@shared/shared/button"
import { FormField } from "@shared/shared/ui/FormField"
import { applyToJobSchema } from "../constants/applyToJobSchema"
import { EventHandler, useEffect } from "react"
import { useGetMe } from "@employee/entities/employee/model/useGetMe"
import { useCreateJobApplication } from "../model/useCreateJobApplication"
import { useAppDispatch } from "@shared/shared/hooks/storeHooks"
import { closeMenu } from "@shared/entities/ui/model/UiSlice"

interface FormFields {
  coverLetter: string
}

interface Props {
  jobPostId?: number
  onCancel?: () => void
}

export const ApplyToJobPostForm = ({ jobPostId, onCancel }: Props) => {
  const dispatch = useAppDispatch()

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

  const { me } = useGetMe()
  const { createJobApplication, isSuccess, isLoading } =
    useCreateJobApplication()

  useEffect(() => {
    if (!isSuccess) return

    dispatch(closeMenu("applyToJobPostModal"))
  }, [isSuccess])

  const onSubmit = (dto: FormFields) => {
    if (!jobPostId || !me) return
    createJobApplication({ ...dto, jobPostId, employeeId: me.id })
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
        label="Соправодителььное письмо"
        isError={Boolean(errors.root) || Boolean(errors.coverLetter)}
        input={{
          placeholder: "Соправодителььное письмо",
          register: { ...register("coverLetter") },
        }}
      />

      <div className="btn-section">
        <Button
          actionType="reset"
          onSubmit={handleCancel}
          onClick={handleCancel}
          color="#878787"
          type="filled"
          rounded
        >
          Отменить
        </Button>
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
