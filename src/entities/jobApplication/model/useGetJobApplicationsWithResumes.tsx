import { JobApplication, JobApplicationWithResume } from "../types"

const jobApplications: JobApplicationWithResume[] = [
  {
    id: 1,
    jobPostId: 1,
    employeeId: 1,
    coverLetter:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore tenetur, optio porro dicta ipsa at consequuntur libero doloremque ipsam blanditiis labore perspiciatis corporis harum cupiditate minima eius, quia dolor.",
    resumeId: 1,
  },
  {
    id: 2,
    jobPostId: 1,
    employeeId: 1,
    coverLetter:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore tenetur, optio porro dicta ipsa at consequuntur libero doloremque ipsam blanditiis labore perspiciatis corporis harum cupiditate minima eius, quia dolor.",
    resumeId: 2,
  },
]

export const useGetJobApplicationsWithResumes = () => {
  return { jobApplications }
}
