import Logo from "@icons/logo.svg?react"
import styled from "styled-components"
import { Header as HeaderTemplate } from "@shared/shared/ui/Header"
import { HeaderModal } from "./HeaderModal"
import { useState } from "react"
import { BurgerBtn } from "@shared/shared/ui/BurgerBtn"
import { Link } from "@shared/shared/ui/Link"

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HeaderLayout>
      <HeaderTemplate
        left={
          <Link to="/employee/job-list">
            <Logo />
          </Link>
        }
        right={<BurgerBtn isActive={isOpen} onClick={toggleModal} />}
      />
      <HeaderModal isOpen={isOpen} onClose={closeModal} />
    </HeaderLayout>
  )
}
const HeaderLayout = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: initial;
  }
`
