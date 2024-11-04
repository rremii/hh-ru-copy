import { Header as HeaderTemplate } from "@shared/shared/ui/Header"
import styled from "styled-components"
import Logo from "@icons/logo.svg?react"
import SearchIcon from "@icons/search.svg?react"
import ProfileIcon from "@icons/profile.svg?react"
import { Link } from "@shared/shared/ui/Link"
import { Logout } from "@employee/features/logout/Logout"

export const Header = () => {
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
            <Logout />
          </SectionContainer>
        }
      />
    </HeaderLayout>
  )
}
const HeaderLayout = styled.header`
  width: 100%;
  background-color: black;
  box-shadow: rgba(0, 0, 0, 1) 0 2px 10px;
`
const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
