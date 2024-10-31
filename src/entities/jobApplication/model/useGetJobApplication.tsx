import { JobApplication } from "../types"

const jobApplications: JobApplication[] = [
  {
    id: 1,
    jobPostId: 1,
    employeeId: 1,
    coverLetter:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore tenetur, optio porro dicta ipsa at consequuntur libero doloremque ipsam blanditiis labore perspiciatis corporis harum cupiditate minima eius, quia dolor.",
  },
  {
    id: 2,
    jobPostId: 1,
    employeeId: 1,
    coverLetter:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore tenetur, optio porro dicta ipsa at consequuntur libero doloremque ipsam blanditiis labore perspiciatis corporis harum cupiditate minima eius, quia dolor.",
  },
]

export const useGetJobApplication = (id?: number) => {
  const jobApplication = jobApplications.find(
    (jobApplication) => jobApplication.id === id
  )

  return { jobApplication }
}
