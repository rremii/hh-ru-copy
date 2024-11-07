import styled from "styled-components"
import { FC } from "react"

interface Props {
  onClick?: () => void
  isActive?: boolean
}

export const BurgerBtn: FC<Props> = ({ onClick, isActive }) => {
  return (
    <BurgerLayout className={isActive ? "active" : ""} onClick={onClick}>
      <div />
      <div />
      <div />
    </BurgerLayout>
  )
}
const BurgerLayout = styled.button`
  width: 30px;
  height: 30px;

  position: relative;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 2px;
    border-radius: 5px;
    background-color: white;
    transition: all 0.3s;
  }

  div:nth-child(1) {
    transform: translateX(-50%) translateY(calc(-50% - 4px));
  }

  div:nth-child(2) {
    transform: translateX(-50%) translateY(calc(-50% + 6px));
  }

  &.active {
    div:nth-child(1) {
      transform: translateX(-50%) translateY(calc(-50%)) rotate(-45deg);
    }

    div:nth-child(2) {
      transform: translateX(-50%) translateY(calc(-50%)) rotate(45deg);
    }

    div:nth-child(3) {
      opacity: 0;
    }
  }
`
