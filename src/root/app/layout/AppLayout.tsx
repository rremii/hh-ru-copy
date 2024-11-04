import React, { FC } from "react"
import styled from "styled-components"

interface Props {
  children: React.ReactNode
}

const AppLayout: FC<Props> = ({ children }) => {
  return <LayoutStyles>{children}</LayoutStyles>
}

export default AppLayout
const LayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  margin: 0 auto;
  background-color: white;
  align-items: center;
`
