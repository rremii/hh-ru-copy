import { yupResolver } from "@hookform/resolvers/yup"
import { FormField } from "@shared/shared/ui/FormField"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { Button } from "@shared/shared/button"
import { JobPost } from "@shared/entities/jobPost/types"
import { jobPostSchema } from "../constants/jobPostSchema"
import { RequirementsPicker } from "@shared/shared/modules/requirementsPicker/RequirementsPicker"
import { useEffect } from "react"

export interface FormFields {
  title: string
  description: string
  requirements: string[]
  salary: number | string
  isLoading?: boolean
}

interface Props extends Partial<FormFields> {
  onSubmit: (dto: FormFields) => void
}

export const JobPostForm = ({ onSubmit, ...jobPost }: Props) => {
  const { description, isLoading, requirements, salary, title } = jobPost
  const {
    clearErrors,
    reset,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(jobPostSchema),
    values: {
      title: title || "",
      description: description || "",
      requirements: requirements || [],
      salary: salary || 0,
    },
    defaultValues: {
      title: title || "",
      description: description || "",
      requirements: requirements || [],
      salary: salary || 0,
    },
  })

  const setRequirements = (requirements: string[]) => {
    setValue("requirements", requirements)
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
        label="Description"
        isError={Boolean(errors.root) || Boolean(errors.description)}
        input={{
          register: { ...register("description") },
        }}
      />
      <FormField
        label="Salary"
        isError={Boolean(errors.root) || Boolean(errors.salary)}
        input={{
          register: { ...register("salary") },
        }}
      />

      <RequirementsPicker
        initRequirements={requirements || []}
        onChange={setRequirements}
      />
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
