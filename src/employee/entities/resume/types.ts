export interface CreateResumeDto {
  title: string

  experience: string

  skills: string[]

  education: string

  employeeId: number
}

export interface UpdateResumeDto {
  id: number

  title?: string

  experience?: string

  skills?: string[]

  education?: string
}
