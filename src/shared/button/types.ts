import { PropsWithChildren } from "react"

type CombineTypes<T, U> = T & U

type BtnType = "simple" | "danger" | "filled"

interface BaseBtnProps extends PropsWithChildren {
  pending?: boolean
  padding?: string
  onClick?: () => void
}

export interface DangerBtnProps extends BaseBtnProps {}

export interface FilledBtnProps extends BaseBtnProps {
  rounded?: boolean | number
  color?: string
}

export interface SimpleBtnProps extends BaseBtnProps {
  color?: string
}

type BtnParamsWithType<
  Type extends BtnType,
  BtnProps extends BaseBtnProps
> = BtnProps & {
  type: Type
}

export type BtnProps =
  | BtnParamsWithType<"filled", FilledBtnProps>
  | BtnParamsWithType<"simple", SimpleBtnProps>
  | BtnParamsWithType<"danger", DangerBtnProps>
