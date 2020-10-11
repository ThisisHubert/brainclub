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
  color?: string
}

export interface PostMap {
  [key: string]: Post
}

export interface ClusterBoxType {
  id: string
  top: number
  left: number
  title: string
}

export interface ClusterBoxMap {
  [key: string]: ClusterBoxType
}

interface PostContextType {
  postMap: PostMap
  setPostMap: (postMap: PostMap) => void
  addPost: (post: Post) => void
  updatePost: (id: string, text: string) => void
  organizePosts: () => void
  deletePost: (id: string) => void
  clusterMap: ClusterBoxMap
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

const clusterColors = [
  '#dfe494',
  '#eec379',
  '#e99a75',
  '#5acaf1',
  '#aa8fef',
]

function PostProvider(props: Props): ReactElement {
  const [postMap, setPostMap] = useState<PostMap>({})
  const [clusterMap, setClusterMap] = useState<ClusterBoxMap>({})

  const organizePosts = useCallback(() => {
    // Send all the posts to server
    const posts = _.values(postMap)
    const clusters = requestOrganizeMock(posts)
    const suffledColors = _.shuffle(clusterColors);
    clusters.forEach((cluster, clusterIndex) => {
      // const yPos = (CLUSTER_SIZE.height + (index !== 0 ? 32 : 0)) * index
      const yPos = (CLUSTER_SIZE.height) * clusterIndex
      cluster.postIds.forEach((postId, index) => {
        if (!postMap[postId]) {
          return
        }
        postMap[postId].top = yPos + POST_CARD_SIZE.topPadding
        postMap[postId].left =
          (POST_CARD_SIZE.width + POST_CARD_SIZE.gapPadding) * index + POST_CARD_SIZE.leftPadding
        postMap[postId].color = suffledColors[clusterIndex]

      })
    })
    setClusterMap((prev) =>
      _.keyBy(
        clusters.map((cluster, index) => ({
          id: cluster.name,
          title: cluster.name,
          top: (CLUSTER_SIZE.height) * index + 32,
          left: 0,
        })),
        'id'
      )
    )
    setPostMap((prev) => ({
      ...postMap,
    }))
  }, [postMap])

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
            },
          })),
        organizePosts,
        deletePost: (id) => setPostMap((prev) => _.omit(prev, id)),
        clusterMap,
      }}
    >
      {props.children}
    </PostContext.Provider>
  )
}

export default PostProvider
