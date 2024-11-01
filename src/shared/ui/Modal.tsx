import styled from "styled-components"

export const Modal = styled.article<{
  $isOpen?: boolean
  $left?: string
  $top?: string
  $zIndex?: number
  $centered?: boolean
}>`
  position: fixed;
  z-index: ${({ $zIndex }) => $zIndex || 20};
  top: ${({ $top }) => ($top || 0) + "px"};
  left: ${({ $left }) => ($left || 0) + "px"};
  background-color: white;
  transition: 0.3s opacity;
  pointer-events: ${({ $isOpen }) => ($isOpen ? "initial" : "none")};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};

  ${({ $centered }) =>
    $centered
      ? `
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        `
      : ""}
`
