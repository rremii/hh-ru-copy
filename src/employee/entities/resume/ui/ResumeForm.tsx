import { yupResolver } from "@hookform/resolvers/yup"
import { FormField } from "@shared/shared/ui/FormField"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { resumeSchema } from "../constants/resumeSchema"
import { Button } from "@shared/shared/button"
import { SkillsPicker } from "@shared/shared/modules/skillsPicker/SkillsPicker"

export interface FormFields {
  title: string
  experience: string
  education: string
  skills: string[]
}

interface Props extends Partial<FormFields> {
  onSubmit: (dto: FormFields) => void
  isLoading: boolean
}

export const ResumeForm = ({
  education,
  experience,
  skills = [],
  title,
  onSubmit,
  isLoading,
}: Props) => {
  const {
    clearErrors,
    reset,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(resumeSchema),
    defaultValues: {
      title: title || "",
      experience: experience || "",
      education: education || "",
      skills: skills || [],
    },
  })

  const setSkills = (skills: string[]) => {
    setValue("skills", skills)
  }

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Title"
        isError={Boolean(errors.root) || Boolean(errors.title)}
        input={{
          register: { ...register("title") },
        }}
      />
      <FormField
        label="Experience"
        isError={Boolean(errors.root) || Boolean(errors.experience)}
        input={{
          register: { ...register("experience") },
        }}
      />
      <FormField
        label="Education"
        isError={Boolean(errors.root) || Boolean(errors.education)}
        input={{
          register: { ...register("education") },
        }}
      />
      <SkillsPicker initSkills={skills} onChange={setSkills} />
      <div className="btn-section">
        <Button
          pending={isLoading}
          color="rgb(13, 194, 103)"
          type="filled"
          rounded
        >
          Submit
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
  }
`
