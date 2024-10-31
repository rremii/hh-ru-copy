export interface JobApplication {
  id: number
  jobPostId: number
  employeeId: number
  coverLetter: string
}

export interface JobApplicationWithResume extends JobApplication {
  resumeId: number
}
