export interface CreateJobPostDto {
  title: string

  description: string

  salary: number

  requirements: string[]
}

export interface UpdateJobPostDto {
  id: number

  title?: string

  description?: string

  salary?: number | string

  requirements?: string[]
}
