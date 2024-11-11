import * as yup from "yup"

export const jobPostSchema = yup.object({
  title: yup.string().required().max(50),
  description: yup.string().required().max(200),
  requirements: yup.array().of(yup.string()),
  salary: yup
    .string()
    .test("salary", "Invalid salary", (value) => {
      const salary = Number(value?.replace("$", ""))

      return salary !== 0
    })
    .required(),
})
