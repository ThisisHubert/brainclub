import { ItemTypes } from 'model/ItemTypes'
import React, { ReactElement, useCallback, useContext } from 'react'
import { useDrop, XYCoord } from 'react-dnd'
import update from 'immutability-helper'
import { DraggableBox } from './DraggableBox'
import { PostCard } from './PostCard'
import { PostContext } from 'providers/PostProviders'

interface DragItem {
  id: string
  type: string
  left: number
  top: number
}

const SuggestionAreaWidth = 200

const styles: React.CSSProperties = {
  width: `calc(100vw - ${SuggestionAreaWidth}px)`,
  height: '100vh',
  border: '1px solid black',
  position: 'relative',
}

function Board(): ReactElement {
  const { postMap, setPostMap } = useContext(PostContext)

  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop(item: DragItem, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      moveBox(item.id, left, top)
      return undefined
    },
  })

  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setPostMap(
        update(postMap, {
          [id]: {
            $merge: { left, top },
          },
        })
      )
    },
    [postMap, setPostMap]
  )

  return (
    <div ref={drop} style={styles}>
      {Object.keys(postMap).map((key) => {
        const { title } = postMap[key]
        return (
          <DraggableBox key={key} {...postMap[key]}>
            <PostCard title={title} />
          </DraggableBox>
        )
      })}
    </div>
  )
}

export default Board
