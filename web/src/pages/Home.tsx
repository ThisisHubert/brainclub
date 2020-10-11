import React, { ReactElement } from 'react'
import Board from 'components/Board'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ToolBar from 'components/ToolBar'
import { Box } from '@material-ui/core'
import PostProvider from 'providers/PostProviders'
import { Header } from 'components/Header'

function Home(): ReactElement {
  return (
    <DndProvider backend={HTML5Backend}>
      <PostProvider>
        <Header />
        <Box display='flex' flexDirection='row'>
          <ToolBar />
          <Board />
        </Box>
      </PostProvider>
    </DndProvider>
  )
}

export default Home
