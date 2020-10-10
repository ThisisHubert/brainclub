import React, { ReactElement } from 'react'
import Board from 'components/Board'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function Home(): ReactElement {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </div>
  )
}

export default Home
