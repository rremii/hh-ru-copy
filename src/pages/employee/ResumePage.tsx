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
      {hasResume ? (
        <>
          <ResumeInfo />
          <OpenResumeModal>Edit</OpenResumeModal>
        </>
      ) : (
        <>
          <OpenResumeModal>Create</OpenResumeModal>
        </>
      )}
      <ResumeModal />
    </PageLayout>
  )
}
const PageLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px 0 100px;
`
