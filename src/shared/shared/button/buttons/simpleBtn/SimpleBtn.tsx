import React, { FC } from "react"
import { SimpleBtnProps } from "../../types"
import styled from "styled-components"
import { Spinner } from "@shared/shared/ui/Spinner"

export const SimpleBtn: FC<SimpleBtnProps> = ({
  pending,
  color,
  padding,
  children,
  onClick,
  ...btnProps
}) => {
  return (
    <SimpleBtnLayout
      onClick={onClick}
      disabled={pending}
      $pending={pending}
      $color={color}
      $padding={padding}
      {...btnProps}
    >
      {children}
      <div className="spinner">
        {pending && <Spinner $color="white" $width="15px" $height="15px" />}
      </div>
    </SimpleBtnLayout>
  )
}

const SimpleBtnLayout = styled.button<{
  $pending?: boolean
  $padding?: string
  $color?: string
}>`
  padding: ${({ $padding }) => $padding || "4px 12px"};
  color: #3b3b3b;
  border: 1px solid #3b3b3b;
  border-radius: 15px;
  transition: 0.3s;
  width: min-content;
  position: relative;

  &:hover {
    border: ${({ $color, $pending }) =>
      $pending ? "none" : `1px solid ${$color || "#0070ff"}`};
    color: ${({ $color }) => $color || "#0070ff"};
  }

  .spinner {
    transition: 0.3s;
    opacity: ${({ $pending }) => ($pending ? 1 : 0)};
    pointer-events: none;
    border-radius: inherit;
    background-color: #3b3b3b;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid #3b3b3b;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
