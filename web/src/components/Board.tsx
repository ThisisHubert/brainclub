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

const styles: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
  position: 'relative',
  backgroundColor: '#DFE6ED'
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
            <PostCard id={key} title={title} />
          </DraggableBox>
        )
      })}
    </div>
  )
}

export default Board
