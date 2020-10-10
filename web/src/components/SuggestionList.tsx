import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, {Component, ReactElement, useState} from 'react'
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import _ from 'lodash';


function SuggestionList(): ReactElement{
    const[suggestions, setSuggestions] = useState(['Suggestion 1', 'Suggestion 2', 'Suggestion 3']);
    
    const AcceptSuggestion = (props: string) => {
        alert(props);
    } 

    return (
        <List>
        {suggestions.map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
            <ListItemIcon> <Button onClick={()=>AcceptSuggestion(text)}><CheckIcon /></Button> <Button onClick={()=>setSuggestions(_.without(suggestions,text))}><ClearIcon /></Button> </ListItemIcon>
          </ListItem>
        ))}
      </List>
    )
}

export default SuggestionList;