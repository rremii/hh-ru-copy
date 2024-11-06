import { ApplyToResumeForm } from "@employer/entities/resumeApplication/ui/ApplyToResumeForm"
import { closeMenu } from "@shared/entities/ui/model/UiSlice"
import {
  useAppDispatch,
  useTypedSelector,
} from "@shared/shared/hooks/storeHooks"
import { Modal } from "@shared/shared/ui/Modal"
import { ModalHeader } from "@shared/shared/ui/ModalHeader"
import { Overlay } from "@shared/shared/ui/Overlay"
import { createPortal } from "react-dom"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export const ApplyToResumeModal = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()

  const isOpen = useTypedSelector((state) => state.Ui.applyToResumeModal)

  const closeModal = () => {
    dispatch(closeMenu("applyToResumeModal"))
  }

  return (
    <>
      {createPortal(
        <>
          <Overlay onClick={closeModal} $isActive={isOpen} />
          <ApplyModal $centered $isOpen={isOpen}>
            <ModalHeader onCrossClick={closeModal} />
            <ApplyToResumeForm onCancel={closeModal} resumeId={Number(id)} />
          </ApplyModal>
        </>,
        document.body
      )}
    </>
  )
}
const ApplyModal = styled(Modal)`
  padding: 30px;
  border-radius: 15px;
  width: 500px;
  max-width: 90%;
`
