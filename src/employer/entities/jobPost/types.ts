export interface CreateJobPostDto {
  title: string

  description: string

  salary: number

  requirements: string[]

  employerId: number
}

export interface UpdateJobPostDto {
  id: number

  title?: string

  description?: string

  salary?: number

  requirements?: string[]
}
