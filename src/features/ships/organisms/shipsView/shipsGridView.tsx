import React from 'react'
import { Grid } from '@material-ui/core'

import { Ship, ShipsData } from '../../types'
import { ShipGridViewItem } from './shipsGridViewItem'


export const ShipsGridView = ({ ships }: ShipsData) => {
  const cardsView = ships.map((obj: Ship, k: number) => (
    <Grid key={k} item>
      <ShipGridViewItem {...obj} />
    </Grid>
  ))

  return (
    <Grid container justify="center" spacing={6}>
      {cardsView}
    </Grid>
  )
}
