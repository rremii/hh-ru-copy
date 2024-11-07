import { useGetMyResumeQuery } from "../api/resumeApi"

export const useGetMyResume = () => {
  const { data: resume, isFetching, isSuccess, error } = useGetMyResumeQuery()

  return { resume, isFetching, isSuccess, error }
}
