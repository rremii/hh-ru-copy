import * as yup from "yup"
import { Resume } from "../../../../shared/entities/resume/types"

export const resumeSchema = yup.object({
  title: yup.string().required(),
  experience: yup.string().required(),
  education: yup.string().required(),
  skills: yup.array(yup.string()).required(),
})
