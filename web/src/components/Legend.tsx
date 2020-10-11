import React, { ReactElement, useContext } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Box, Button, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { PostContext } from 'providers/PostProviders'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: '16px',
      boxShadow: '4px 4px 10px 0 rgba(0,0,0,0.1)',
      backgroundColor: '#ffffff',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    group: {
      width: '16px',
      height: '16px',
      background: 'pink',
      borderRadius: 5
    },
    list: {
      fontFamily: 'Roboto',
      fontSize: '17px',
      fontWeight: 500,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '2.59',
      letterSpacing: 'normal',
      textAlign: 'left',
    },
    button: {
      padding: 0,
      width: 60,
      height: 60,
      backgroundColor: '#38a3b4',
      borderRadius: '16px',
    },
  })
)

export interface Igroup {
  color: string
}

function GroupIndicator({ color }: Igroup): ReactElement {
  const classes = useStyles()

  return <div className={classes.group} style={{ background: color }}></div>
}

function Legend(): ReactElement {
  const classes = useStyles()
  const { clusterMap } = useContext(PostContext)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MenuIcon htmlColor='#ffffff' />
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {Object.values(clusterMap).map((cluster) => {
          const labelId = `checkbox-list-label-${cluster.id}`

          return (
            <MenuItem key={cluster.id} onClick={handleClose}>
              <GroupIndicator
                color={cluster.color ?? ''}
              />
              <Box ml={1}/>
              <ListItemText
                id={labelId}
                primary={`${cluster.title}`}
                className={classes.list}
              />
            </MenuItem>
          )
        })}
      </Menu>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading}>
            Welcome to Brain Club!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List className={classes.root}>
              {data.map((post) => {
                const labelId = `checkbox-list-label-${post.id}`

                return (
                  <ListItem key={post.id} role={undefined} dense button>
                    <GroupIndicator
                      color={post.color}
                      id={post.id}
                      title={post.title}
                    />
                    <ListItemText
                      id={labelId}
                      primary={`${post.title}`}
                      className={classes.list}
                    />
                  </ListItem>
                )
              })}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  )
}

export default Legend
