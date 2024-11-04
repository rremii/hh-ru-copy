import { useGetMyResume } from "@entities/resume/model/useGetMyResume"
import { OpenResumeModal } from "@features/openResumeModal/OpenResumeModal"
import { TagsPicker } from "@shared/modules/tagsPicker/TagsPicker"
import { Cross } from "@shared/ui/Cross"
import { ResumeInfo } from "@widgets/employee/resumeInfo/ResumeInfo"
import { ResumeModal } from "@widgets/employee/resumeModal/ui/ResumeModal"
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
