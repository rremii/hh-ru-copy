import { openMenu } from "@shared/entities/ui/model/UiSlice"
import { Button } from "@shared/shared/button"
import { useAppDispatch } from "@shared/shared/hooks/storeHooks"
import { PropsWithChildren } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

interface Props extends PropsWithChildren {
  jobPostId?: number
}

export const OpenJobPostModal = ({ children, jobPostId }: Props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const openModal = () => {
    navigate("/employer/job-posts/" + (jobPostId || ""))
    dispatch(openMenu("jobPostModal"))
  }

  return (
    <Button type="filled" rounded onClick={openModal}>
      {children}
    </Button>
  )
}
