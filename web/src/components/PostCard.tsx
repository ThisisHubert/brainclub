import { Box, Button, makeStyles, TextField } from '@material-ui/core'
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
    border: '2px solid gray',
    padding: '8px',
    backgroundColor: 'white',
  },
  button: {
    minWidth: 0,
    padding: 0,
    lineHeight: 1
  },
})

export interface BoxProps {
  id: string
  title: string
}

export function PostCard({ title, id }: BoxProps): ReactElement {
  const classes = useStyles()
  const { updatePost, deletePost } = useContext(PostContext)
  return (
    <Box className={classes.root}>
      <Box display='flex' flexDirection='row-reverse' flexGrow={1}>
        <Button className={classes.button} onClick={() => deletePost(id)}>
          x
        </Button>
      </Box>
      <TextField
        fullWidth
        multiline
        rows={5}
        defaultValue={title}
        InputProps={{ disableUnderline: true }}
        onChange={(e) => updatePost(id, e.target.value)}
      />
    </Box>
  )
}
