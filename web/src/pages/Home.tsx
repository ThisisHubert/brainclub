import React, { ReactElement } from 'react'
import Board from 'components/Board'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ToolBar from 'components/ToolBar'
import { Box } from '@material-ui/core'
import PostProvider from 'providers/PostProviders'
import Suggestions from 'components/Suggestions'

function Home(): ReactElement {
  return (
    <DndProvider backend={HTML5Backend}>
      <PostProvider>
        <Box display='flex' flexDirection='row'>
          <ToolBar />
          <Board />
        </Box>
        <Suggestions />
      </PostProvider>
    </DndProvider>
  )
}

export default Home
