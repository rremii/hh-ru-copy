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
import { Modal } from "@shared/shared/ui/Modal"
import { useNavigate, useParams } from "react-router-dom"
import { useGetJobPost } from "@employee/entities/jobPost/model/useGetJobPost"
import { EditJobPostForm } from "@employer/entities/jobPost/ui/EditJobPostForm"
import { CreateJobPostForm } from "@employer/entities/jobPost/ui/CreateJobPostForm"
import { ModalHeader } from "@shared/shared/ui/ModalHeader"

export const JobPostModal = () => {
  const dispatch = useAppDispatch()

  const { id } = useParams()
  const isOpen = useTypedSelector((state) => state.Ui.jobPostModal)

  const { jobPost } = useGetJobPost(Number(id))

  const closeModal = () => {
    dispatch(closeMenu("jobPostModal"))
  }
  const isUpdate = typeof id === "number" && jobPost
  return (
    <>
      {createPortal(
        <>
          <Overlay $isActive={isOpen} onClick={closeModal} />
          <FormModal $centered $isOpen={isOpen}>
            <ModalHeader onCrossClick={closeModal} />
            {isUpdate ? (
              <EditJobPostForm {...jobPost} />
            ) : (
              <CreateJobPostForm />
            )}
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
  /* height: 600px; */
  max-height: 90%;
`
