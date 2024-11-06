import * as yup from "yup"
import { JobPost } from "@shared/entities/jobPost/types"

export const jobPostSchema = yup.object<JobPost>({
  title: yup.string().required(),
  description: yup.string().required(),
  salary: yup.number().required(),
  requirements: yup.array().of(yup.string()),
})
