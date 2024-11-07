import { openMenu } from "@shared/entities/ui/model/UiSlice"
import { Button } from "@shared/shared/button"
import { useAppDispatch } from "@shared/shared/hooks/storeHooks"
import { PropsWithChildren } from "react"
import styled from "styled-components"

interface Props extends PropsWithChildren {}

export const OpenResumeModal = ({ children }: Props) => {
  const dispatch = useAppDispatch()

  const openModal = () => {
    dispatch(openMenu("resumeModal"))
  }

  return (
    <Button type="filled" rounded onClick={openModal}>
      {children}
    </Button>
  )
}
