import * as yup from "yup"

export const resumeSchema = yup.object({
  title: yup.string().required().max(30),
  experience: yup.string().required().max(200),
  education: yup.string().required().max(200),
  skills: yup.array(yup.string()).required(),
})
