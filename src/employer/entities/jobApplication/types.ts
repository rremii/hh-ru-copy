import { JobApplication } from "@shared/entities/jobApplication/types"

export interface JobApplicationDto extends JobApplication {
  resume: {
    id: number
  }
}
