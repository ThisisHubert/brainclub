import { CLUSTER_SIZE, POST_CARD_SIZE } from 'const'
import _ from 'lodash'
import React, {
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useState,
} from 'react'

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
  organizePosts: () => void
  deletePost: (id: string) => void
}

export const PostContext = createContext<PostContextType>(undefined as never)

interface Props {
  children?: ReactNode
}

interface Cluster {
  name: string
  postIds: string[]
}

function requestOrganizeMock(posts: Post[]): Cluster[] {
  return [
    {
      name: 'coffee',
      postIds: ['1', '2', '3'],
    },
    {
      name: 'bread',
      postIds: ['4', '5'],
    },
    {
      name: 'chicken',
      postIds: ['6', '7', '8'],
    },
  ]
}

function PostProvider(props: Props): ReactElement {
  const [postMap, setPostMap] = useState<PostMap>({})

  const organizePosts = useCallback(() => {
    // Send all the posts to server
    const posts = _.values(postMap)
    const clusters = requestOrganizeMock(posts)
    clusters.forEach((cluster, index) => {
      const yPos = (CLUSTER_SIZE.height + ((index !== 0) ? 32 : 0 )) * index
      cluster.postIds.forEach((postId, index) => {
        if (!postMap[postId]) {
          return
        }
        postMap[postId].top = yPos
        postMap[postId].left = ((POST_CARD_SIZE.width + ((index !== 0) ? 50 : 0 )) * index)
      })
    })

    setPostMap((prev) => ({
      ...postMap,
    }))
  }, [postMap])

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
            },
          })),
        organizePosts,
        deletePost: (id) => setPostMap(prev => _.omit(prev, id))
      }}
    >
      {props.children}
    </PostContext.Provider>
  )
}

export default PostProvider
