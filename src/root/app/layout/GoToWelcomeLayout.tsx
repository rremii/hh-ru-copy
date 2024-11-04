import { Link } from "@shared/shared/ui/Link"
import { PropsWithChildren } from "react"
import styled from "styled-components"

import Arrow from "@icons/arrow.svg?react"
import { useNavigate } from "react-router-dom"

export const GoToWelcomeLayout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  return (
    <>
      <HeaderLayout>
        <LinkContainer onClick={handleClick}>
          <ArrowContainer>
            <Arrow width={22} color="black" />
          </ArrowContainer>
          <Text>Welcome</Text>
        </LinkContainer>
      </HeaderLayout>
      {children}
    </>
  )
}

const HeaderLayout = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

const LinkContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Text = styled.span`
  font-size: 20px;
  font-weight: bold;
`
const ArrowContainer = styled.div`
  transform: rotate(90deg);
`
