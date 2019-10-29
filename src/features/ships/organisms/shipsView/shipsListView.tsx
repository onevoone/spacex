import React from 'react'
import { List } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { Ship, ShipsData } from '../../types'
import { ShipListViewItem } from './shipsListViewItem'


const useStyles = makeStyles({
  root: {
  },
})


export const ShipsListView = ({ ships }: ShipsData) => {
  const classes = useStyles()

  const listView = ships.map((obj: Ship, k: number) => (
    <ShipListViewItem key={k} {...obj} />
  ))

  return (
    <List
      // aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {listView}
    </List>
  )
}
