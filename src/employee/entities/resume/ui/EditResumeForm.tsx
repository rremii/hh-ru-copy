import { yupResolver } from "@hookform/resolvers/yup"
import { FormField } from "@shared/shared/ui/FormField"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { resumeSchema } from "../constants/resumeSchema"
import { Button } from "@shared/shared/button"
import { Resume } from "../../../../shared/entities/resume/types"
import { SkillsPicker } from "@shared/shared/modules/skillsPicker/SkillsPicker"
import { FormFields, ResumeForm } from "./ResumeForm"

interface Props extends Resume {}

export const EditResumeForm = ({
  education,
  employeeId,
  experience,
  skills,
  title,
  id,
}: Props) => {
  const onSubmit = (dto: FormFields) => {
    console.log(dto)
  }

  return (
    <ResumeForm
      education={education}
      experience={experience}
      skills={skills}
      title={title}
      onSubmit={onSubmit}
    />
  )
}
