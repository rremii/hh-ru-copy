export interface IJobPost {
  title: string
  description: string
  salary: number | string
  requirements: string[]
  employerId: number
  created_at: Date
}
