import { useGetResumes } from "@employer/entities/resume/model/useGetResumes"
import styled from "styled-components"
import { ResumeCard } from "@employer/shared/ui/ResumeCard"

export const ResumesList = () => {
  const { resumes, isFetching } = useGetResumes()

  return (
    <ResumesListLayout>
      {isFetching && <div>LOADING</div>}
      {resumes?.map((resume) => (
        <ResumeCard key={resume.id} {...resume} />
      ))}
    </ResumesListLayout>
  )
}
const ResumesListLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
