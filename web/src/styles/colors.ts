import { $enum } from 'ts-enum-util'

// NOTE: Material-ui doesn't support "#AARRGGBB" format.
//       Refer to zeplin style guide with css extension.

enum AppColor {
  black = '#000',
  black87 = 'rgba(0, 0, 0, 0.87)',
  black60 = 'rgba(0, 0, 0, 0.6)',
  black38 = 'rgba(0, 0, 0, 0.38)',
  black24 = 'rgba(0, 0, 0, 0.24)',
  black12 = 'rgba(0, 0, 0, 0.12)',
  black04 = 'rgba(0, 0, 0, 0.04)',
  white = '#ffffff',
  white87 = 'rgba(255, 255, 255, 0.87)',
  white60 = 'rgba(255, 255, 255, 0.6)',
  white38 = 'rgba(255, 255, 255, 0.38)',
  white24 = 'rgba(255, 255, 255, 0.24)',
  white12 = 'rgba(255, 255, 255, 0.12)',
  smoke = '#fafafa',
  blue = '#2175ff',
  blue87 = 'rgba(33, 117, 255, 0.87)',
  blue38 = 'rgba(33, 117, 255, 0.38)',
  blue12 = 'rgba(33, 117, 255, 0.12)',
  blue04 = 'rgba(33, 117, 255, 0.04)',
  warning = '#ff625f',
  red = '#d62741',
  green = '#26d9ad',
  yellow = '#ffc019',
  transparent = 'rgba(255, 255, 255, 0.0)',
}

export default AppColor

export const keyOf = (appColor: AppColor): keyof typeof AppColor => {
  return $enum(AppColor).getKeyOrThrow(appColor)
}
