import { Box, makeStyles, Typography } from '@material-ui/core'
import { CLUSTER_SIZE } from 'const'
import React, { ReactElement } from 'react'

interface StyleProps {
  backgroundColor: string
}

const useStyles = makeStyles({
  root: {
    height: CLUSTER_SIZE.height,
    cursor: 'move',
    border: '1px dashed #9EADBA',
  },
})

export interface BoxProps {
  id: string
  title: string
}

export function ClusterBox({ title, id }: BoxProps): ReactElement {
  const classes = useStyles()
  return (
    <Box className={classes.root} mx={3} mb={0.5}>
      <Box ml={2} mt={1}>
        <Typography variant='h3'>{title}</Typography>
      </Box>
    </Box>
  )
}
