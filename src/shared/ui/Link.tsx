import { PropsWithChildren } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

interface Props extends PropsWithChildren {
  to: string
  filled?: boolean
}

export const Link = ({ children, to, filled }: Props) => {
  if (filled) return <FilledLinkLayout to={to}>{children}</FilledLinkLayout>
  return <LinkLayout to={to}>{children}</LinkLayout>
}

const FilledLinkLayout = styled(NavLink)<{ $active?: boolean }>`
  font-size: 16px;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 5px;

  padding: 7px 15px;
  border-radius: 15px;

  color: rgb(106, 120, 133);
  background-color: rgb(241, 244, 249);
  &.active {
    color: white;
    background-color: black;
    opacity: 1;
  }
`

const LinkLayout = styled(NavLink)`
  color: white;
  font-size: 16px;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 5px;

  svg,
  path {
    color: white;
    transition: 0.3s;
  }

  &:hover {
    color: rgb(135, 192, 201);

    svg,
    path {
      color: rgb(135, 192, 201);
    }
  }
`
