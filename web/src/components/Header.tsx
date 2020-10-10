import { Box, Button, makeStyles, TextField } from '@material-ui/core'
import { Close } from '@material-ui/icons'
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
    padding: '8px',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
    border: 'solid 1px #6036d3',
    backgroundColor: '#e6faf6',
    borderRadius: 5,
  },
  button: {
    minWidth: 0,
    padding: 0,
    lineHeight: 1,
  },
})

export function Header(): ReactElement {
  return (
    <Box height={64} padding={8} />
  )
}
