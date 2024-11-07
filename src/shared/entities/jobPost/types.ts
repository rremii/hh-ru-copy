export interface JobPost {
  id: number
  title: string
  description: string
  salary: number | string
  requirements: string[]
  employerId: number
  isApplied: boolean
}
