import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'
import { useParams } from 'react-router'
import { useQuery } from '@apollo/react-hooks'

import { Loading } from '../../common'
import { GET_SHIP_DETAILS } from '../requests'
import { ShipDetails as ShipDetailsData, ShipDetailsVars } from '../types'


export const ShipDetails = () => {
  const { id } = useParams()

  const { loading, data } = useQuery<ShipDetailsData, ShipDetailsVars>(
    GET_SHIP_DETAILS, 
    { variables: { id }}
  )

  if (loading) {
    return <Loading />
  }


  const ship = data && data.ship

  if (ship) {
    return (
      <Box>
        <Typography component="p">name: {ship.name}</Typography>
        <Typography component="p">model: {ship.model}</Typography>
        <Typography component="p">image: {ship.image}</Typography>
        <Typography component="p">status: {ship.status}</Typography>
        <Typography component="p">successful_landings: {ship.successful_landings}</Typography>
        <Typography component="p">type: {ship.type}</Typography>
        <Typography component="p">url: {ship.url}</Typography>
        <Typography component="p">weight_lbs: {ship.weight_lbs}</Typography>
        <Typography component="p">year_built: {ship.year_built}</Typography>
        <Typography component="p">weight_kg: {ship.weight_kg}</Typography>
        <Typography component="p">speed_kn: {ship.speed_kn}</Typography>
        <Typography component="p">roles: {ship.roles}</Typography>
        <Typography component="p">missions: {JSON.stringify(ship.missions)}</Typography>
        <Typography component="p">imo: {ship.imo}</Typography>
        <Typography component="p">mmsi: {ship.mmsi}</Typography>
        <Typography component="p">home_port: {ship.home_port}</Typography>
        <Typography component="p">course_deg: {ship.course_deg}</Typography>
        <Typography component="p">class: {ship.class}</Typography>
        <Typography component="p">attempted_landings: {ship.attempted_landings}</Typography>
        <Typography component="p">active: {ship.active}</Typography>
        <Typography component="p">abs: {ship.abs}</Typography>
        <Typography component="p">position: {JSON.stringify(ship.position)}</Typography>
  
        {JSON.stringify(data && data.ship)}
      </Box>
    )
  }
}
