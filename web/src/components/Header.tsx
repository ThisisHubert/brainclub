import { Avatar, Box, Typography } from '@material-ui/core'
import { PostContext } from 'providers/PostProviders'
import React, { ReactElement, useContext } from 'react'
import image1 from 'assets/images/image1.jpeg'
import image2 from 'assets/images/image2.jpeg'
import image3 from 'assets/images/image3.jpeg'
import image4 from 'assets/images/image4.jpeg'
import Suggestions from 'components/Suggestions'
import { ActionButton } from './ActionButton'

interface StyleProps {
  backgroundColor: string
}

export function Header(): ReactElement {
  const { organizePosts } = useContext(PostContext)
  return (
    <Box
      pt={5}
      pl={9}
      pb={13}
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
    >
      <Box
        border='solid 1px #707070'
        borderRadius={5}
        width={456}
        display='flex'
        px={5}
        py={1.5}
        alignItems='center'
      >
        <Box height={32} width={32} bgcolor='#6036d3' />
        <Box ml={7} />
        <Typography variant={'h3'} color='primary'>
          Brain Club
        </Typography>
      </Box>
      <Box display='flex' flexDirection='row' alignItems='center'>
        <Box display='flex' flexDirection='row' mr={2}>
          <Avatar src={image1} />
          <Box ml={0.5} />
          <Avatar src={image2} />
          <Box ml={0.5} />
          <Avatar src={image3} />
          <Box ml={0.5} />
          <Avatar src={image4} />
        </Box>
        <Box ml={2} />
        <Suggestions />
        <Box ml={2} />
        <ActionButton title={'Organize'} callback={() => organizePosts()} />
        <Box ml={4} />
      </Box>
    </Box>
  )
}
