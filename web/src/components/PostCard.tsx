import { Box, makeStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'

interface StyleProps {
  backgroundColor: string
}

const useStyles = makeStyles({
  root: {
    padding: '0.5rem 1rem',
    cursor: 'move',
    backgroundColor: (props: StyleProps) => props.backgroundColor,
  },
})

export interface BoxProps {
  title: string
  yellow?: boolean
}

// TODO: Apply style
export function PostCard({ title, yellow }: BoxProps): ReactElement {
  const backgroundColor = yellow ? 'yellow' : 'white'
  const classes = useStyles({
    backgroundColor,
  })
  return <Box className={classes.root}>{title}</Box>
}
