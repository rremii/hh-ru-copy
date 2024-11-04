import { Link } from "@shared/shared/ui/Link"
import styled from "styled-components"

export const ApplicationsHeader = () => {
  const links = [
    {
      path: "/employer/applications/me",
      label: "Мои",
    },
    {
      path: "/employer/applications/employees",
      label: "Работников",
    },
  ]

  return (
    <HeaderLayout>
      {links.map((link, index) => (
        <Link filled to={link.path} key={index}>
          {link.label}
        </Link>
      ))}
    </HeaderLayout>
  )
}
const HeaderLayout = styled.header`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-self: flex-start;
`
