import { Box, makeStyles, TextField } from '@material-ui/core'
import { POST_CARD_SIZE } from 'const'
import { PostContext } from 'providers/PostProviders'
import React, { ReactElement, useContext } from 'react'

interface StyleProps {
  backgroundColor: string
}

const useStyles = makeStyles({
  root: {
    width: POST_CARD_SIZE.width,
    height: POST_CARD_SIZE.height,
    cursor: 'move',
  },
})

export interface BoxProps {
  id: string
  title: string
}

// TODO: Apply style
export function PostCard({ title, id }: BoxProps): ReactElement {
  const classes = useStyles()
  const { updatePost } = useContext(PostContext)
  return (
    <Box className={classes.root}>
      <TextField
        fullWidth
        multiline
        rows={4}
        defaultValue={title}
        InputProps={{ disableUnderline: true }}
        onChange={(e) => updatePost(id, e.target.value)}
      />
    </Box>
  )
}
