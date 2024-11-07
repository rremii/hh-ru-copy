import styled from "styled-components"
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
