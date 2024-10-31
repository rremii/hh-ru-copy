import { IResumeApplication } from "../types"

const resumeApplications: IResumeApplication[] = [
  {
    id: 1,
    resumeId: 1,
    employerId: 1,
    coverLetter:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore tenetur, optio porro dicta ipsa at consequuntur libero doloremque ipsam blanditiis labore perspiciatis corporis harum cupiditate minima eius, quia dolor.",
  },
  {
    id: 2,
    resumeId: 1,
    employerId: 1,
    coverLetter:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore tenetur, optio porro dicta ipsa at consequuntur libero doloremque ipsam blanditiis labore perspiciatis corporis harum cupiditate minima eius, quia dolor.",
  },
]

export const useGetResumeApplication = (id?: number) => {
  const resumeApplication = resumeApplications.find(
    (resumeApplication) => resumeApplication.id === id
  )

  return { resumeApplication }
}
