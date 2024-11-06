import * as yup from "yup"

export const applyToResumeSchema = yup.object({
  coverLetter: yup.string().required(),
})
