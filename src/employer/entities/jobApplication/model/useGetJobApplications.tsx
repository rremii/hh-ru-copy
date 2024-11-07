import { useGetJobApplicationsQuery } from "../api/JobApplicationApi"

export const useGetJobApplications = (jobPostId?: number) => {
  const {
    data: jobApplications,
    isFetching,
    isSuccess,
    error,
  } = useGetJobApplicationsQuery(jobPostId as number, { skip: !jobPostId })

  return { jobApplications, isFetching, isSuccess, error }
}
