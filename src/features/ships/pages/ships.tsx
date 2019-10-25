import React from 'react'
import { Grid } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'

import { Loading } from '../../common'
import { GET_SHIPS } from '../requests'
import { Ship, ShipsData } from '../types'
import { ShipCard } from '../organisms/shipCard'


export const Ships = () => {
  const { loading, error, data } = useQuery<ShipsData>(GET_SHIPS)

  if (loading) {
    return <Loading />
  }

  const shipsView = data && data.ships.map((obj: Ship, k: number) => (
    <Grid key={k} item>
      <ShipCard {...obj} />
    </Grid>
  ))

  return (
    <Grid container justify="center" spacing={6}>
      {shipsView}
    </Grid>
  )
}
