import { Button, makeStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'

const useStyles = makeStyles({
  button: {
    width: '190px',
    color: 'white',
    backgroundColor: '#38a3b4',
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: 0,
    paddingRight: 0,
    textTransform: 'none',
    fontSize: '20px',
    boxShadow: `0 4px 10px 0 rgba(0, 0, 0, 0.16)`,
    borderRadius: '16px',
    fontWeight: 'bold'
  },
})

interface Props {
  title: string
  callback: () => void
}

export function ActionButton(props: Props): ReactElement {
  const classes = useStyles()
  return (
    <Button className={classes.button} onClick={props.callback}>
      {props.title}
    </Button>
  )
}
