import { Box, Button } from '@material-ui/core'
import { uniqueId } from 'lodash'
import { PostContext } from 'providers/PostProviders'
import React, { ReactElement, useContext } from 'react'

function ToolBar(): ReactElement {
  const { addPost, organizePosts } = useContext(PostContext)
  return (
    <Box width='50px' height='300px' border='1px solid black'>
      <Button
        onClick={() =>
          addPost({
            id: uniqueId(),
            top: 0,
            left: 0,
            title: 'new',
          })
        }
      >
        Add
      </Button>
      <Box mt={1} />
      <Button onClick={() => organizePosts()}>Organize</Button>
    </Box>
  )
}

export default ToolBar
