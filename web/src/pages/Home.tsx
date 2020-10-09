import React, { ReactElement } from 'react'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

function Home(): ReactElement {
  const classes = useStyles()
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Teamname_untitled
          </Typography>
          <Button color='inherit'>Join</Button>
        </Toolbar>
      </AppBar>
      <Box> Hello world</Box>
    </>
  )
}

export default Home
