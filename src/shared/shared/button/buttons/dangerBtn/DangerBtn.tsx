import { FC } from "react"
import styled from "styled-components"
import { DangerBtnProps } from "../../types"
import { Spinner } from "@shared/shared/ui/Spinner"

export const DangerBtn: FC<DangerBtnProps> = ({
  pending,
  padding,
  children,
  onClick,
  color = "#fff",
  ...btnProps
}) => {
  return (
    <DangerBtnLayout
      onClick={onClick}
      disabled={pending}
      $pending={pending}
      $padding={padding}
      $color={color}
      {...btnProps}
    >
      {children}
      <div className="spinner">
        {pending && <Spinner $color={color} $width="15px" $height="15px" />}
      </div>
    </DangerBtnLayout>
  )
}

const DangerBtnLayout = styled.button<{
  $pending?: boolean
  $padding?: string
  $color?: string
}>`
  color: #ff4d3a;
  padding: ${({ $padding }) => $padding || "5px 10px"};
  border-radius: 10px;
  transition: 0.3s;
  position: relative;
  width: min-content;
  &:hover {
    background-color: #ff4d3a;
    color: ${({ $color }) => $color};
  }

  .spinner {
    transition: 0.3s;
    opacity: ${({ $pending }) => ($pending ? 1 : 0)};
    pointer-events: none;
    border-radius: inherit;
    background-color: #ff4d3a;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
