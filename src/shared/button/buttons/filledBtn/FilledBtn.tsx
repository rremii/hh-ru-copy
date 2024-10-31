import { FilledBtnProps } from "@shared/button/types"
import { Spinner } from "@shared/ui/Spinner"
import React, { FC } from "react"
import styled from "styled-components"

export const FilledBtn: FC<FilledBtnProps> = ({
  pending,
  padding,
  children,
  color,
  rounded,
  onClick,
}) => {
  let brRadius = 0
  if (rounded === true) brRadius = 10
  if (typeof rounded === "number") brRadius = rounded
  return (
    <FilledBtnLayout
      onClick={onClick}
      $pending={pending}
      $color={color}
      $padding={padding}
      $brRadius={brRadius}
      disabled={pending}
    >
      {children}

      <div className="spinner">
        {pending && <Spinner $color="white" $width="15px" $height="15px" />}
      </div>
    </FilledBtnLayout>
  )
}

const FilledBtnLayout = styled.button<{
  $pending?: boolean
  $padding?: string
  $color?: string
  $brRadius?: number
}>`
  background-color: ${({ $color }) => $color || "#0070ff"};
  position: relative;
  padding: ${({ $padding }) => $padding || "8px 16px"};
  border-radius: ${({ $brRadius }) => $brRadius + "px"};
  transition: 0.3s;
  color: white;
  width: max-content;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }

  .spinner {
    transition: 0.3s;
    opacity: ${({ $pending }) => ($pending ? 1 : 0)};
    pointer-events: none;
    border-radius: inherit;
    background-color: ${({ $color }) => $color || "#0070ff"};
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
