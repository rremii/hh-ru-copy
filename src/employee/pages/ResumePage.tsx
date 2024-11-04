import { useGetMyResume } from "@employee/entities/resume/model/useGetMyResume"
import { OpenResumeModal } from "@employee/features/openResumeModal/OpenResumeModal"
import { ResumeInfo } from "@employee/widgets/resumeInfo/ResumeInfo"
import { ResumeModal } from "@employee/widgets/resumeModal/ui/ResumeModal"
import styled from "styled-components"

export const ResumePage = () => {
  const { resume } = useGetMyResume()

  const hasResume = !!resume

  return (
    <PageLayout>
      <ResumeWrapper>
        {hasResume ? (
          <>
            <ResumeInfo />
            <BtnSection>
              <OpenResumeModal>Edit</OpenResumeModal>
            </BtnSection>
          </>
        ) : (
          <BtnSection>
            <OpenResumeModal>Create</OpenResumeModal>
          </BtnSection>
        )}
        <ResumeModal />
      </ResumeWrapper>
    </PageLayout>
  )
}
const PageLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 50px 0 100px;
`

const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const BtnSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`
