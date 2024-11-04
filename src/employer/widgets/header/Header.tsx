import { Header as HeaderTemplate } from "@shared/shared/ui/Header"
import styled from "styled-components"
import Logo from "@icons/logo.svg?react"
import SearchIcon from "@icons/search.svg?react"
import ProfileIcon from "@icons/profile.svg?react"
import { Link } from "@shared/shared/ui/Link"
import { Logout } from "@employer/features/logout/Logout"

export const Header = () => {
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
