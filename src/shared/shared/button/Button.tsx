import { ReactNode } from "react"
import { BtnProps } from "./types"
import { SimpleBtn } from "./buttons/simpleBtn/SimpleBtn"
import { DangerBtn } from "./buttons/dangerBtn/DangerBtn"
import { FilledBtn } from "./buttons/filledBtn/FilledBtn"

export const Button = ({ type, ...btnParams }: BtnProps): ReactNode => {
  switch (type) {
    case "simple":
      return <SimpleBtn {...btnParams} />
    case "danger":
      return <DangerBtn {...btnParams} />
    case "filled":
      return <FilledBtn {...btnParams} />
    default:
      return <SimpleBtn {...btnParams} />
  }
}
