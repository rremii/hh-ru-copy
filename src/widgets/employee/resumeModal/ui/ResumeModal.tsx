import { useGetMyResume } from "@entities/resume/model/useGetMyResume"
import { CreateResumeForm } from "@entities/resume/ui/CreateResumeForm"
import { EditResumeForm } from "@entities/resume/ui/EditResumeForm"
import { closeMenu } from "@entities/ui/model/UiSlice"
import { useAppDispatch, useTypedSelector } from "@shared/hooks/storeHooks"
import { Modal } from "@shared/ui/Modal"
import { Overlay } from "@shared/ui/Overlay"
import { createPortal } from "react-dom"
import styled from "styled-components"
import Cross from "@icons/cross.svg?react"

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
            <ModalHeader>
              <button onClick={closeModal}>
                <Cross width="20" height="20" />
              </button>
            </ModalHeader>
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
  width: 500px;
  max-width: 90%;
`
const ModalHeader = styled.header`
  display: flex;
  justify-content: flex-end;
`
