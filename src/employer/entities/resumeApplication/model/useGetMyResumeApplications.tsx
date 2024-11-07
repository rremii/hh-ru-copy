import { useGetMyResumeApplicationsQuery } from "../api/resumeApplicationApi"

export const useGetMyResumeApplications = () => {
  const {
    data: resumeApplications,
    isFetching,
    isSuccess,
    error,
  } = useGetMyResumeApplicationsQuery()

  return { resumeApplications, isFetching, isSuccess, error }
}
