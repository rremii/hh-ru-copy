import { PropsWithChildren } from "react"
import styled from "styled-components"

interface Props extends PropsWithChildren {
  onClick?: () => void
}

export const Skill = ({ children, onClick }: Props) => {
  return <SkillLayout onClick={onClick}>{children}</SkillLayout>
}
const SkillLayout = styled.button``
