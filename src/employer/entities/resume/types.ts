import { Resume } from "@shared/entities/resume/types"

export interface GetResumeResponse extends Resume {
  isApplied: boolean
}
