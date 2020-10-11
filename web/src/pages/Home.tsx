import React, { ReactElement } from 'react'
import Board from 'components/Board'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ToolBar from 'components/ToolBar'
import { Box } from '@material-ui/core'
import PostProvider from 'providers/PostProviders'
<<<<<<< HEAD
import { Header } from 'components/Header'
=======
import Suggestions from 'components/Suggestions'
import Legend from 'components/Legend'
>>>>>>> 4a0cb903... Added legend, styling

function Home(): ReactElement {
  return (
    <DndProvider backend={HTML5Backend}>
      <PostProvider>
        <Header />
        <Box display='flex' flexDirection='row'>
          <ToolBar />
          <Board />
          <Suggestions />
          <Legend />
        </Box>
      </PostProvider>
    </DndProvider>
  )
}

export default Home
