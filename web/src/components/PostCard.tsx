import { Box, makeStyles, TextField } from '@material-ui/core'
import { POST_CARD_SIZE } from 'const'
import React, { ReactElement } from 'react'

interface StyleProps {
  backgroundColor: string
}

const useStyles = makeStyles({
  root: {
    width: POST_CARD_SIZE.width,
    height: POST_CARD_SIZE.height,
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
  return (
    <Box className={classes.root}>
      <TextField
        fullWidth
        multiline
        rows={4}
        defaultValue={title}
        InputProps={{ disableUnderline: true }}
      />
    </Box>
  )
}
