import {
  Avatar,
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { POST_CARD_SIZE } from 'const'
import { PostContext } from 'providers/PostProviders'
import React, { ReactElement, useContext } from 'react'
import image1 from 'assets/images/image1.jpeg'
import image2 from 'assets/images/image2.jpeg'
import image3 from 'assets/images/image3.jpeg'
import image4 from 'assets/images/image4.jpeg'
import Suggestions from 'components/Suggestions'
import { AppColor } from 'styles'

interface StyleProps {
  backgroundColor: string
}

const useStyles = makeStyles({
  root: {
    width: POST_CARD_SIZE.width,
    height: POST_CARD_SIZE.height,
    cursor: 'move',
    padding: '8px',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
    border: 'solid 1px #6036d3',
    backgroundColor: '#e6faf6',
    borderRadius: 5,
  },
  button: {
    minWidth: 0,
    padding: 0,
    lineHeight: 1,
  },
  text: {

  },
  organizeButton: {
    color: 'white',
    backgroundColor: AppColor.primary,
    padding: '12px 32px',
    textTransform: 'none',
    fontSize: '16px',
    boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.16)`,
    border: `solid 1px #707070`
  },
})

export function Header(): ReactElement {
  const { organizePosts } = useContext(PostContext)
  const classes = useStyles()
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
        <Typography className={classes.text} variant={'h3'} color='primary'>
          Brain Club
        </Typography>
      </Box>
      <Box display='flex' flexDirection='row' alignItems='center'>
        <Box display='flex' flexDirection='row' mr={2}>
          <Avatar src={image1} />
          <Box ml={.5}/>
          <Avatar src={image2} />
          <Box ml={.5}/>
          <Avatar src={image3} />
          <Box ml={.5}/>
          <Avatar src={image4} />
        </Box>
        <Box ml={2}/>
        <Suggestions />
        <Box ml={2}/>
        <Button className={classes.organizeButton} onClick={() => organizePosts()}>Organize</Button>
        <Box ml={4}/>
      </Box>
    </Box>
  )
}
