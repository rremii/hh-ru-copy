import { PropsWithChildren } from "react"
import styled from "styled-components"

interface Props extends PropsWithChildren {
  onClick?: () => void
}

export const Skill = ({ children, onClick }: Props) => {
  return <SkillLayout onClick={onClick}>{children}</SkillLayout>
}
const SkillLayout = styled.button`
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  padding: 5px 10px;
  margin: 5px;
  line-height: 17px;
  display: flex;
  align-items: center;
  gap: 5px;
`
