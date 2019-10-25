import React from 'react'
import { Box, Container } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'


interface Props {
  children: React.ReactNode;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "calc(100vh - 104px)",
      paddingTop: 40,
    },
  }),
)


export const Main = (props: Props) => {
  const classes = useStyles()

  return (
    <Box component="main" className={classes.root}>
      <Container>
        {props.children}
      </Container>
    </Box>
  )
}