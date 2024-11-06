import { PropsWithChildren } from "react"
import styled from "styled-components"

interface Props extends PropsWithChildren {
  onClick?: () => void
}

export const Requirement = ({ children, onClick }: Props) => {
  return <RequirementLayout onClick={onClick}>{children}</RequirementLayout>
}
const RequirementLayout = styled.li`
  border-radius: 15px;
  padding: 5px 10px;
  margin: 5px;
  line-height: 17px;
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: calc(100%);
    width: 7px;
    height: 7px;
    background-color: black;
    border-radius: 50%;
  }
`
