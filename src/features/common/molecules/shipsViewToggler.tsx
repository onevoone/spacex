import React from 'react'
import { useRouteMatch } from 'react-router'
import { makeStyles } from '@material-ui/styles'
import { compose, branch, renderNothing } from 'recompose'
import { Grid, Button, ButtonGroup } from '@material-ui/core'

import { connectStore } from '../../../tools'
import { shipsViewType } from '../../../store'


interface TogglerProps {
  store: {
    shipsView: shipsViewType;
  };
}

const useStyles = makeStyles({
  root: {
    width: 'max-content',
    marginRight: 10,
  },
})


const enhance = compose<TogglerProps, any>(
  branch(() => {    // if the route does not match => render nothing
    const match = useRouteMatch("/ships")
    return !match || !match.isExact
  }, renderNothing),
  connectStore(),
)


export const ShipsViewToggler = enhance(({ store: { shipsView } }) => {
  const classes = useStyles()
  const { setListView, setGridView, getView } = shipsView

  const isListActiveView = getView === "list" ? "primary" : "default"
  const isGridActiveView = getView === "grid" ? "primary" : "default"


  const change2ListView = () => {
    setListView()
  }
  const change2GridView = () => {
    setGridView()
  }

  return (
    <Grid container justify="flex-end" className={classes.root}>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button variant="outlined" size="small" color={isListActiveView} onClick={change2ListView}>list</Button>
        <Button variant="outlined" size="small" color={isGridActiveView} onClick={change2GridView}>grid</Button>
      </ButtonGroup>
    </Grid>
  )
})
