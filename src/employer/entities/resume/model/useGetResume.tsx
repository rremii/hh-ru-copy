import { useGetResumeQuery } from "../api/ResumeApi"

export const useGetResume = (id?: number) => {
  const {
    data: resume,
    isFetching,
    isSuccess,
    error,
  } = useGetResumeQuery(id as number, { skip: !id })

  return { resume, isFetching, isSuccess, error }
}
