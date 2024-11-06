import { useGetMyResume } from "@employee/entities/resume/model/useGetMyResume"
import { closeMenu } from "@shared/entities/ui/model/UiSlice"
import {
  useAppDispatch,
  useTypedSelector,
} from "@shared/shared/hooks/storeHooks"
import { Overlay } from "@shared/shared/ui/Overlay"
import { createPortal } from "react-dom"
import styled from "styled-components"
import Cross from "@icons/Cross.svg?react"
import { EditResumeForm } from "@employee/entities/resume/ui/EditResumeForm"
import { CreateResumeForm } from "@employee/entities/resume/ui/CreateResumeForm"
import { Modal } from "@shared/shared/ui/Modal"
import { ModalHeader } from "@shared/shared/ui/ModalHeader"

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
            <ModalHeader onCrossClick={closeModal} />

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
