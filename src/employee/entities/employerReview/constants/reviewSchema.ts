import * as yup from "yup"

export const reviewSchema = yup.object({
  comment: yup.string().required(),
})
