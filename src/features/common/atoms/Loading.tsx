import React from 'react'
import { Box, CircularProgress } from '@material-ui/core'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      marginTop: '25%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
)


export const Loading = () => {
  const classes = useStyles()

  return (
    <Box className={classes.wrapper}>
      <CircularProgress />
    </Box>
  )
}
