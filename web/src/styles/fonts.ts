const h3 = {
  name: 'h3',
  style: {
    fontWeight: 700,
    fontSize: 28,
    lineHeight: 1.43,
  },
} as const

const h4 = {
  name: 'h4',
  style: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 1.4,
  },
} as const

const h5 = {
  name: 'h5',
  style: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 1.44,
  },
} as const

const h6 = {
  name: 'h6',
  style: {
    fontSize: 18,
    lineHeight: 1.44,
  },
} as const

const subtitle1 = {
  name: 'subtitle1',
  style: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 1.5,
  },
} as const

const body1 = {
  name: 'body1',
  style: {
    fontSize: 16,
    lineHeight: 1.5,
  },
} as const

const subtitle2 = {
  name: 'subtitle2',
  style: {
    fontSize: 13,
    fontWeight: 700,
    lineHeight: 1.54,
  },
} as const

const body2 = {
  name: 'body2',
  style: {
    fontSize: 13,
    lineHeight: 1.54,
  },
} as const

const caption = {
  name: 'caption',
  style: {
    fontSize: 12,
    lineHeight: 1.5,
  },
} as const

const overline = {
  name: 'overline',
  style: {
    fontSize: 10,
    lineHeight: 1.6,
  },
} as const

const AppTypography = {
  h3,
  h4,
  h5,
  h6,
  subtitle1,
  body1,
  subtitle2,
  body2,
  caption,
  overline,
} as const

export default AppTypography
