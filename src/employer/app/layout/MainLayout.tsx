import { Header } from "@employer/widgets/header/Header"
import React, { FC } from "react"
import styled from "styled-components"

interface Props {
  children: React.ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1250px;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    padding: 0 10px;
  }
`
