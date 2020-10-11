import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { ReactElement, useContext, useState } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import _ , { uniqueId } from 'lodash';
import ToolBar from 'components/ToolBar'
import { PostContext } from 'providers/PostProviders'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '300px',
      boxShadow: '4px 4px 10px 0 rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff',
    },
    item: {
      width: '120px',
      height: '26px',
      fontFamily: 'Roboto',
      fontSize: '20px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '2.2',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#000000',
    },
    closeBtn: {
      width: '36px',
      height: '36px',
      borderRadius: '10px',
      backgroundColor: '#a5b5b7',
    },
    checkBtn: {
      width: '36px',
      height: '36px',
      borderRadius: '10px',
      backgroundColor: '#38a3b4',

    }
  }),
);

function SuggestionList(): ReactElement{
  const classes = useStyles();
  const { addPost } = useContext(PostContext)
  const[suggestions, setSuggestions] = useState(['Suggestion 1', 'Suggestion 2', 'Suggestion 3']);
    
  const AcceptSuggestion = (props: string) => {
    addPost({
      id: uniqueId(),
      top: 0,
      left: 0,
      title: props,
    })
  }


  return (
      <List className={classes.root}>
      {suggestions.map((text) => (
        <ListItem button key={text}>
          <ListItemText className={classes.item} primary={text} />
          <ListItemIcon> <Button onClick={() => AcceptSuggestion(text)} ><CheckIcon className={classes.checkBtn}/></Button> <Button onClick={()=>setSuggestions(_.without(suggestions,text))}><ClearIcon className={classes.closeBtn} /></Button> </ListItemIcon>
        </ListItem>
      ))}
    </List>
  )
}

export default SuggestionList;