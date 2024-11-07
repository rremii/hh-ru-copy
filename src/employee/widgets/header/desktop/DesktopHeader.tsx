import { Header as HeaderTemplate } from "@shared/shared/ui/Header"
import Logo from "@icons/logo.svg?react"
import SearchIcon from "@icons/search.svg?react"
import ProfileIcon from "@icons/profile.svg?react"
import { Logout } from "@employee/features/logout/Logout"
import styled from "styled-components"
import { Link } from "@shared/shared/ui/Link"

export const DesktopHeader = () => {
  return (
    <HeaderLayout>
      <HeaderTemplate
        left={
          <SectionContainer>
            <Link to="/employee/job-list">
              <Logo />
            </Link>
            <Link to="/employee/resume">Резюме</Link>
            <Link to="/employee/applications/me">Отклики</Link>
          </SectionContainer>
        }
        right={
          <SectionContainer>
            <Link to="/employee/job-list">
              <SearchIcon />
              Поиск
            </Link>
            <Link to="/employee/profile">
              <ProfileIcon />
            </Link>
            <Logout>выйти</Logout>
          </SectionContainer>
        }
      />
    </HeaderLayout>
  )
}
const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const HeaderLayout = styled.div`
  display: none;
  @media screen and (min-width: 600px) {
    display: initial;
    background-color: red;
  }
`
