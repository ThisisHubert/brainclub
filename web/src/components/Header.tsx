import { Avatar, Box, makeStyles, Typography } from '@material-ui/core'
import { PostContext } from 'providers/PostProviders'
import React, { ReactElement, useContext } from 'react'
import image1 from 'assets/images/image1.jpeg'
import image2 from 'assets/images/image2.jpeg'
import image3 from 'assets/images/image3.jpeg'
import image4 from 'assets/images/image4.jpeg'
import Suggestions from 'components/Suggestions'
import { ActionButton } from './ActionButton'
import logo from 'assets/images/logo.svg'
import Legend from './Legend'

interface StyleProps {
  backgroundColor: string
}

const useStyles = makeStyles({
  container: {
    backgroundColor: 'white',
    padding: '13px 18px',
    borderRadius: '16px',
    border: 'solid 1px #ededed',
  },
})

export function Header(): ReactElement {
  const { organizePosts } = useContext(PostContext)
  const classes = useStyles()
  return (
    <Box
      pt={5}
      ml={3}
      pb={13}
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
    >
      <Box display='flex' flexDirection='row' alignItems='center'>
        <Box width={92}>
          <img src={logo} alt='' />
        </Box>
        <Box ml={2} />
        <Box
          className={classes.container}
          width={338}
          display='flex'
          px={5}
          py={1.5}
          alignItems='center'
        >
          <Box ml={2}>
            <Typography
              style={{
                lineHeight: 'unset',
              }}
              display='block'
              variant='h3'
              component='h3'
            >
              Brain Club
            </Typography>
          </Box>
        </Box>
        <Box ml={2} />
        <Box
          display='flex'
          flexDirection='row'
          mr={2}
          bgcolor='white'
          className={classes.container}
        >
          <Avatar src={image1} />
          <Box ml={0.5} />
          <Avatar src={image2} />
          <Box ml={0.5} />
          <Avatar src={image3} />
          <Box ml={0.5} />
          <Avatar src={image4} />
        </Box>
        <Box ml={2} />
      </Box>
      <Box display='flex' flexDirection='row' alignItems='center'>
        <Box ml={2} />
        <Suggestions />
        <Box ml={2} />
        <ActionButton title={'Organize'} callback={() => organizePosts()} />
        <Box ml={4} />
      </Box>
    </Box>
  )
}
