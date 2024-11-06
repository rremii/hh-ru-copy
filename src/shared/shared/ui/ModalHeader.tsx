import styled from "styled-components"
import Cross from "@icons/Cross.svg?react"

interface Props {
  onCrossClick: () => void
}

export const ModalHeader = ({ onCrossClick }: Props) => {
  return (
    <HeaderLayout>
      <button onClick={onCrossClick}>
        <Cross width="20" height="20" />
      </button>
    </HeaderLayout>
  )
}
const HeaderLayout = styled.header`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`
