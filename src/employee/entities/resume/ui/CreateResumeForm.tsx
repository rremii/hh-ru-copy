import { yupResolver } from "@hookform/resolvers/yup"
import { FormField } from "@shared/shared/ui/FormField"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { resumeSchema } from "../constants/resumeSchema"
import { Button } from "@shared/shared/button"

interface FormFields {
  title: string
  experience: string
  education: string
  skills: string[]
}

export const CreateResumeForm = () => {
  const {
    clearErrors,
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(resumeSchema),
    defaultValues: {
      title: "",
      experience: "",
      education: "",
      skills: [],
    },
  })

  const onSubmit = async (dto: FormFields) => {}

  return (
    <FormLayout>
      <FormField
        isError={Boolean(errors.root) || Boolean(errors.title)}
        input={{
          placeholder: "title",
          register: { ...register("title") },
        }}
      />
      <FormField
        isError={Boolean(errors.root) || Boolean(errors.experience)}
        input={{
          placeholder: "experience",
          register: { ...register("experience") },
        }}
      />
      <FormField
        isError={Boolean(errors.root) || Boolean(errors.education)}
        input={{
          placeholder: "education",
          register: { ...register("education") },
        }}
      />
      <FormField
        isError={Boolean(errors.root) || Boolean(errors.skills)}
        input={{
          placeholder: "skills1, skills2, skills3",
          register: { ...register("skills") },
        }}
      />
      <Button type="filled" rounded>
        Submit
      </Button>
    </FormLayout>
  )
}

const FormLayout = styled.form``
