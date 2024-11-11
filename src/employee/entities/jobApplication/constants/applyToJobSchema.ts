import * as yup from "yup"

export const applyToJobSchema = yup.object({
  coverLetter: yup.string().required().max(200),
})
