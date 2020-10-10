import React, { createContext, ReactElement, ReactNode, useState } from 'react'

import _ from 'lodash'

interface Post {
  id: string
  top: number
  left: number
  title: string
}

export interface PostMap {
  [key: string]: Post
}

interface PostContextType {
  postMap: PostMap
  setPostMap: (postMap: PostMap) => void
  addPost: (post: Post) => void
}

export const PostContext = createContext<PostContextType>(undefined as never)

interface Props {
  children?: ReactNode
}

const POST_SAMPLES = [
  { id: '1', top: 20, left: 80, title: 'Drag me around' },
  { id: '2', top: 180, left: 20, title: 'Drag me too' },
]

function PostProvider(props: Props): ReactElement {
  const [postMap, setPostMap] = useState<PostMap>(
    _.keyBy(POST_SAMPLES, (o) => o.id)
  )

  return (
    <PostContext.Provider
      value={{
        postMap,
        setPostMap,
        addPost: (post) =>
          setPostMap((prev) => ({
            ...prev,
            [post.id]: post,
          })),
      }}
    >
      {props.children}
    </PostContext.Provider>
  )
}

export default PostProvider
