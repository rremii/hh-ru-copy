import { useGetMyJobApplicationsQuery } from "../api/JobApplicationApi"

export const useGetMyJobApplications = () => {
  const {
    data: jobApplications,
    isFetching,
    isSuccess,
    error,
  } = useGetMyJobApplicationsQuery()

  return { jobApplications, isFetching, isSuccess, error }
}
