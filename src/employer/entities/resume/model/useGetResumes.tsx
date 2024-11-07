import { Resume } from "@shared/entities/resume/types"
import { useGetResumesQuery } from "../api/ResumeApi"

export const useGetResumes = () => {
  const { data: resumes, isFetching, isSuccess, error } = useGetResumesQuery()

  return { resumes, isFetching, isSuccess, error }
}
