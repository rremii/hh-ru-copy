import { maxWidth, maxWidthWrapper, minWidth, wrapperWidth } from "./settings"

export const Rem = (px: number) => `${+px / 16}rem`

export const Em = (px: number) => `${+px / 16}em`

export const AdaptiveValue = (
  startSize: number,
  minSize: number,
  widthFrom = wrapperWidth,
  widthTo = minWidth,
) => {
  if (startSize === 0) startSize = 0.000001

  if (minSize === 0) minSize = 0.000001

  if (widthFrom === wrapperWidth && maxWidthWrapper === 0) {
    widthFrom = maxWidth
  }

  // break points in EM
  // const widthFromMedia = Em(widthFrom)
  // const widthToMedia = Em(widthTo)

  // formula of fly value
  const slope = (startSize - minSize) / (widthFrom - widthTo)
  let yIntersection = -widthTo * slope + minSize
  if (yIntersection === 0) {
    yIntersection = 0.000001
  }
  ///
  const flyValue = `calc(${Rem(yIntersection)} + (${slope} * 100vw))`
  ///
  // getting property value
  let propertyValue =
    "clamp(" + Rem(minSize) + "," + flyValue + "," + Rem(startSize) + ")"
  // used if property value is a negative number
  if (minSize > startSize) {
    propertyValue =
      "clamp(" + Rem(startSize) + "," + flyValue + "," + Rem(minSize) + ")"
  }

  return propertyValue + ""
}
