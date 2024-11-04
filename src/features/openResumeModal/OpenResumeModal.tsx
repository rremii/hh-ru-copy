import { openMenu } from "@entities/ui/model/UiSlice"
import { Button } from "@shared/button"
import { useAppDispatch } from "@shared/hooks/storeHooks"
import { PropsWithChildren } from "react"
import styled from "styled-components"

interface Props extends PropsWithChildren {}

export const OpenResumeModal = ({ children }: Props) => {
  const dispatch = useAppDispatch()

  const openModal = () => {
    dispatch(openMenu("resumeModal"))
  }

  return (
    <Button
      style={{
        width: "100px",
      }}
      type="filled"
      rounded
      onClick={openModal}
    >
      {children}
    </Button>
  )
}
