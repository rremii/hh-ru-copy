import * as yup from "yup"
import { Resume } from "../../../../shared/entities/resume/types"

export const resumeSchema = yup.object<Resume>({
  title: yup.string().required(),
  experiences: yup.string().required(),
  education: yup.string().required(),
  skills: yup.array(yup.string()).required(),
})
