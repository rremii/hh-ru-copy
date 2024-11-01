import { useGetMyResume } from "@entities/resume/model/useGetMyResume"
import { CreateResumeForm } from "@entities/resume/ui/CreateResumeForm"
import { EditResumeForm } from "@entities/resume/ui/EditResumeForm"
import { closeMenu } from "@entities/ui/model/UiSlice"
import { useAppDispatch, useTypedSelector } from "@shared/hooks/storeHooks"
import { Modal } from "@shared/ui/Modal"
import { Overlay } from "@shared/ui/Overlay"
import { createPortal } from "react-dom"
import styled from "styled-components"

export const ResumeModal = () => {
  const dispatch = useAppDispatch()

  const isOpen = useTypedSelector((state) => state.Ui.resumeModal)

  const { resume } = useGetMyResume()
  const isResume = !!resume

  const closeModal = () => {
    dispatch(closeMenu("resumeModal"))
  }

  return (
    <>
      {createPortal(
        <>
          <Overlay $isActive={isOpen} onClick={closeModal} />
          <FormModal $centered $isOpen={isOpen}>
            {isResume ? <EditResumeForm {...resume} /> : <CreateResumeForm />}
          </FormModal>
        </>,
        document.body
      )}
    </>
  )
}
const FormModal = styled(Modal)`
  padding: 30px;
  border-radius: 15px;
`
