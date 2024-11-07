import { Header as HeaderTemplate } from "@shared/shared/ui/Header"
import Logo from "@icons/logo.svg?react"
import SearchIcon from "@icons/search.svg?react"
import ProfileIcon from "@icons/profile.svg?react"
import styled from "styled-components"
import { Link } from "@shared/shared/ui/Link"
import { Logout } from "@employer/features/logout/Logout"

export const DesktopHeader = () => {
  return (
    <HeaderLayout>
      <HeaderTemplate
        left={
          <SectionContainer>
            <Link to="/employer/resumes">
              <Logo />
            </Link>
            <Link to="/employer/job-posts">Мои вакансии</Link>
            <Link to="/employer/applications/me">Отклики</Link>
          </SectionContainer>
        }
        right={
          <SectionContainer>
            <Link to="/employer/resumes">
              <SearchIcon />
              Поиск
            </Link>
            <Link to="/employer/profile">
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
