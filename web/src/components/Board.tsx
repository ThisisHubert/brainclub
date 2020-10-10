import { ItemTypes } from 'model/ItemTypes'
import React, { ReactElement, useCallback, useState } from 'react'
import { useDrop, XYCoord } from 'react-dnd'
import update from 'immutability-helper'
import { DraggableBox } from './DraggableBox'
import { PostCard } from './PostCard'

interface DragItem {
  id: string
  type: string
  left: number
  top: number
}

const styles: React.CSSProperties = {
  width: 300,
  height: 300,
  border: '1px solid black',
  position: 'relative',
}

interface BoxMap {
  [key: string]: { top: number; left: number; title: string }
}

function Board(): ReactElement {
  const [boxes, setBoxes] = useState<BoxMap>({
    a: { top: 20, left: 80, title: 'Drag me around' },
    b: { top: 180, left: 20, title: 'Drag me too' },
  })

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
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        })
      )
    },
    [boxes]
  )

  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => {
        const { title } = boxes[key]
        return (
          <DraggableBox key={key} id={key} {...boxes[key]}>
            <PostCard title={title} />
          </DraggableBox>
        )
      })}
    </div>
  )
}

export default Board
