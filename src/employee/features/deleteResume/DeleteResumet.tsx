import { PropsWithChildren } from "react"
import styled from "styled-components"

interface Props extends PropsWithChildren {}

export const DeleteResume = ({ children }: Props) => {
  const onClick = () => {
    console.log("delete")
  }
  return <DeleteBtnLayout onClick={onClick}>{children}</DeleteBtnLayout>
}
const DeleteBtnLayout = styled.button``
