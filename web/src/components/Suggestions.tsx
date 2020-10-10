import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SuggestionList from 'components/SuggestionList'
import { ActionButton } from './ActionButton'

function SuggestingDrawer(): ReactElement {
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor: Anchor) => (
    <div
      role='presentation'
      /*onClick={toggleDrawer(anchor, false)}*/
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['AI Suggestion'].map((text, index) => (
          <ListItem key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <SuggestionList />
    </div>
  )

  return (
    <div>
      {(['right'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <ActionButton
            title={'Suggestion'}
            callback={() => setState({ ...state, [anchor]: true })}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}

function Display() {}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  suggestingBtn: {
    display: 'relative',
    right: '0',
    color: 'white',
    backgroundColor: '#6036d3',
    textTransform: 'none',
    fontSize: '16px',
    padding: '12px 32px',
    boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.16)`,
    border: `solid 1px #707070`,
  },
})

type Anchor = 'right'

/*
const useStyles = makeStyles((theme) => ({

    },
    menu: {
        fontSize: '1.5rem',
        fontWeight: 600,
        paddingTop: 50,
        listStyle: 'none',
        lineHeight: '3',
    },
    closeBtn: {
        position: 'fixed',
        top: 'auto',
        bottom: '0',
        right: '0',
        fontSize: '2rem',
        backgroundColor: 'gray',
    }
}))
*/
/*

function Suggestions(): ReactElement{
    const classes = useStyles()
    const [value, setValue] = useState<boolean>(true)
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

    const clickMe = () => {
        alert(value);
    };
    return (
        <><div>
            <Button onClick={clickMe}>Button</Button>
        </div>

            <div className={classes.host}>
                <ul className={classes.menu}>
                    <h2>AI Suggestion</h2>
                    <li>Menu Item</li>
                    <li>Menu Item</li>
                    <li>Menu Item</li>
                    <Button className={classes.closeBtn} onClick={clickMe}>Organize>></Button>
                </ul>
            </div></>

            {['left', 'right', 'top', 'bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                </Drawer>
                </React.Fragment>
            ))}


    )
}

*/
export default SuggestingDrawer
