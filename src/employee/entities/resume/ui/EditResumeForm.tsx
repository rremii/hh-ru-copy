import { yupResolver } from "@hookform/resolvers/yup"
import { FormField } from "@shared/shared/ui/FormField"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { resumeSchema } from "../constants/resumeSchema"
import { Button } from "@shared/shared/button"
import { Resume } from "../../../../shared/entities/resume/types"
import { SkillsPicker } from "@shared/shared/modules/skillsPicker/SkillsPicker"
import { FormFields, ResumeForm } from "./ResumeForm"
import { useUpdateResume } from "../model/useUpdateResume"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { closeMenu } from "@shared/entities/ui/model/UiSlice"

interface Props extends Resume {}

export const EditResumeForm = ({
  education,
  employeeId,
  experience,
  skills,
  title,
  id,
}: Props) => {
  const dispatch = useDispatch()

  const { updateResume, isLoading, isSuccess } = useUpdateResume()

  useEffect(() => {
    dispatch(closeMenu("resumeModal"))
  }, [isSuccess])

  const onSubmit = (dto: FormFields) => {
    updateResume({ ...dto, id })
  }

  return (
    <ResumeForm
      isLoading={isLoading}
      education={education}
      experience={experience}
      skills={skills}
      title={title}
      onSubmit={onSubmit}
    />
  )
}
