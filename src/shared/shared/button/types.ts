import { ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren } from "react"

type CombineTypes<T, U> = T & U

type BtnType = "simple" | "danger" | "filled"

interface BaseBtnProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLButtonElement> {
  pending?: boolean
  padding?: string
}

export interface DangerBtnProps extends BaseBtnProps {
  color?: string
}

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
