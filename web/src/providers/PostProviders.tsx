import React, { createContext, ReactElement, ReactNode, useState } from 'react'

export interface Post {
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
  updatePost: (id: string, text: string) => void
}

export const PostContext = createContext<PostContextType>(undefined as never)

interface Props {
  children?: ReactNode
}

function PostProvider(props: Props): ReactElement {
  const [postMap, setPostMap] = useState<PostMap>({})

  console.log(postMap)

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
        updatePost: (id, text) =>
          setPostMap((prev) => ({
            ...prev,
            [id]: {
              ...prev[id],
              title: text,
            }
          })),
      }}
    >
      {props.children}
    </PostContext.Provider>
  )
}

export default PostProvider
