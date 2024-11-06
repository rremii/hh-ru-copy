import { ResumesList } from "@employer/widgets/resumesList/ResumesList"
import styled from "styled-components"

export const ResumesPage = () => {
  return (
    <PageLayout>
      <ResumesList />
    </PageLayout>
  )
}
const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 100px;
  gap: 20px;
`
