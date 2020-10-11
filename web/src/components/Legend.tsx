import React, { ReactElement } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '300px',
      borderRadius: '16px',
      boxShadow: '4px 4px 10px 0 rgba(0,0,0,0.1)',
      backgroundColor: '#ffffff',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    group: {
        border: '1px solid black',
        width: '1rem',
        height: '1rem',
        background: 'pink',
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
    }
  }),
);

export interface Igroup {
    title: string
    id: number
    color: string
}

function GroupIndicator({title, id, color}: Igroup): ReactElement {
    const classes = useStyles();
    
    return (
        <div className={classes.group} style={{background: color}}> 
            
        </div>
    )

}

function Legend(): ReactElement {
    const classes = useStyles();
    const data = [
        {id: 1, title: 'Hello World', color: 'pink'},
        {id: 2, title: 'Installation', color: 'cyan'},
        {id: 3, title: 'Coffeee', color: 'yellow'},
        {id: 4, title: 'Tiramisu', color: 'brown'},
    ];
  
    return (
        <div className={classes.root}>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading}>Welcome to Brain Club!</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                <List className={classes.root}>
                    {data.map((post) => {
                        const labelId = `checkbox-list-label-${post.id}`;

                        return (
                        <ListItem key={post.id} role={undefined} dense button >
                            <GroupIndicator color={post.color} id={post.id} title={post.title} />
                            <ListItemText id={labelId} primary={`${post.title}`} className={classes.list}/>
                        </ListItem>
                        );
                    })}
                </List>  
            </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
    );
}

export default Legend;