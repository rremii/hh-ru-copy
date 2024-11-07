import * as yup from "yup"

export const jobPostSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  requirements: yup.array().of(yup.string()),
})
