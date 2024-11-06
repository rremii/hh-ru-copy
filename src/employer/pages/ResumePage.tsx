import { ApplyToResumeModal } from "@employer/widgets/applyToResumeModal/ApplyToResumeModal"
import { Resume } from "@employer/widgets/resume/Resume"
import styled from "styled-components"

export const ResumePage = () => {
  return (
    <PageLayout>
      <Resume />
      <ApplyToResumeModal />
    </PageLayout>
  )
}
const PageLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 20px;
`
