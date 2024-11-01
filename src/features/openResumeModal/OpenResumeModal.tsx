import { openMenu } from "@entities/ui/model/UiSlice"
import { useAppDispatch } from "@shared/hooks/storeHooks"
import { PropsWithChildren } from "react"
import styled from "styled-components"

interface Props extends PropsWithChildren {}

export const OpenResumeModal = ({ children }: Props) => {
  const dispatch = useAppDispatch()

  const openModal = () => {
    dispatch(openMenu("resumeModal"))
  }

  return <ButtonLayout onClick={openModal}>{children}</ButtonLayout>
}
const ButtonLayout = styled.button``
