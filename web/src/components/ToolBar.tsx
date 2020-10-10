import { Box, Button, makeStyles } from '@material-ui/core'
import { InsertDriveFile } from '@material-ui/icons'
import { uniqueId } from 'lodash'
import { PostContext } from 'providers/PostProviders'
import React, { ReactElement, useContext } from 'react'

const useStyles = makeStyles({
  container: {
    backgroundColor: 'white',
    padding: '19px 18px',
    borderRadius: '16px',
    border: 'solid 1px #ededed',
  },
  button: {
    minWidth: 0,
    padding: 0,
  },
})

function ToolBar(): ReactElement {
  const { addPost } = useContext(PostContext)
  const classes = useStyles()
  return (
    <Box height='240px' ml={3} className={classes.container}>
      <Button
        className={classes.button}
        onClick={() =>
          addPost({
            id: uniqueId(),
            top: 0,
            left: 0,
            title: 'new',
          })
        }
      >
        <InsertDriveFile htmlColor="#38a3b4" />
      </Button>
      <Box mt={1} />
    </Box>
  )
}

export default ToolBar
