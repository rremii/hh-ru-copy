import { Header as HeaderTemplate } from "@shared/shared/ui/Header"
import styled from "styled-components"
import Logo from "@icons/logo.svg?react"
import SearchIcon from "@icons/search.svg?react"
import ProfileIcon from "@icons/profile.svg?react"
import { Link } from "@shared/shared/ui/Link"
import { Logout } from "@employer/features/logout/Logout"
import { DesktopHeader } from "./desktop/DesktopHeader"
import { MobileHeader } from "./mobile/MobileHeader"

export const Header = () => {
  return (
    <HeaderLayout>
      <DesktopHeader />
      <MobileHeader />
    </HeaderLayout>
  )
}
const HeaderLayout = styled.header`
  width: 100%;
  background-color: black;
  box-shadow: rgba(0, 0, 0, 1) 0 2px 10px;
  padding: 0 20px;
  position: relative;
  height: 80px;
`
