import { createMuiTheme } from '@material-ui/core'
import { mapValues } from 'lodash'

import AppColor from './colors'
import AppTypography from './fonts'

const AppTheme = createMuiTheme({
  palette: {
    primary: {
      main: AppColor.blue,
    },
    // Add secondary color if needed
    error: {
      main: AppColor.warning,
    },
    text: {
      primary: AppColor.black87,
      secondary: AppColor.black60,
      disabled: AppColor.black38,
      hint: AppColor.black12,
    },
  },
  typography: {
    fontFamily: [
      'Spoqa Han Sans',
      'Roboto',
      'Apple SD Gothic Neo',
      'Malgun Gothic',
      'sans-serif',
    ].join(','),
    ...mapValues(AppTypography, $0 => $0.style),
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
          '@media (hover: none)': {
            boxShadow: 'none',
          },
        },
        '&:active': {
          boxShadow: 'none',
        },
        '&:focus': {
          boxShadow: 'none',
        },
      },
    },
  },
})

export default AppTheme
