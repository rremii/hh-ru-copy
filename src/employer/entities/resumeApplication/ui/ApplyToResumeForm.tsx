import { useForm } from "react-hook-form"
import { applyToResumeSchema } from "../constants/applyToResumeSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import styled from "styled-components"
import { Button } from "@shared/shared/button"
import { FormField } from "@shared/shared/ui/FormField"
import { useCreateResume } from "@employee/entities/resume/model/useCreateResume"
import { useCreateResumeApplication } from "../model/useCreateResumeApplication"
import { useAppDispatch } from "@shared/shared/hooks/storeHooks"
import { useEffect } from "react"
import { closeMenu } from "@shared/entities/ui/model/UiSlice"
import { useGetMe } from "@employer/entities/employer/model/useGetMe"

interface FormFields {
  coverLetter: string
}

interface Props {
  resumeId?: number
  onCancel?: () => void
}

export const ApplyToResumeForm = ({ resumeId, onCancel }: Props) => {
  const dispatch = useAppDispatch()

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

  const { me } = useGetMe()
  const { createResumeApplication, isSuccess, isLoading } =
    useCreateResumeApplication()

  useEffect(() => {
    if (!isSuccess) return

    dispatch(closeMenu("applyToResumeModal"))
  }, [isSuccess])

  const onSubmit = (dto: FormFields) => {
    if (!resumeId || !me) return
    createResumeApplication({ ...dto, resumeId, employerId: me.id })
  }

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (onCancel) onCancel()
    reset()
  }

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Сопроводительное письмо"
        isError={Boolean(errors.root) || Boolean(errors.coverLetter)}
        input={{
          placeholder: "Сопроводительное письмо",
          register: { ...register("coverLetter") },
        }}
      />

      <div className="btn-section">
        <Button
          actionType="reset"
          onClick={handleCancel}
          color="#878787"
          type="filled"
          rounded
        >
          Отмена
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
