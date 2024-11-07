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
      {hasResume ? (
        <ResumeWrapper>
          <ResumeInfo
            bottom={
              <BtnSection>
                <OpenResumeModal>Edit</OpenResumeModal>
              </BtnSection>
            }
          />
        </ResumeWrapper>
      ) : (
        <OpenResumeModal>Create Resume</OpenResumeModal>
      )}
      <ResumeModal />
    </PageLayout>
  )
}

const ResumeWrapper = styled.div`
  width: 100%;
  max-width: 400px;
`

const PageLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 50px 0 100px;
  flex-direction: column;

  align-items: flex-start;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`

const BtnSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`
