import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@apollo/react-hooks'
import { Grid, Box, Typography, Paper, makeStyles, Theme, Link } from '@material-ui/core'

import { Loading } from '../../common'
import { GET_SHIP_DETAILS } from '../requests'
import { ShipDetails as ShipDetailsData, ShipDetailsVars } from '../types'
import { MissionsPanel } from '../molecules'


const useStyles = makeStyles((theme: Theme) => ({
  papper: {
    padding: 20,
    '& p': {
      wordBreak: 'break-word',
    },
  },
  shipImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  panelHeading: {

  }
}))


const Text = ({ label, value, expression }: { label: string; value: string|number|null; expression?: object }) => {
  if (!value) {
    return null
  }
  return <Typography component="p">{label}: {value}</Typography>
}


export const ShipDetails = () => {
  const { id } = useParams()
  const classes = useStyles()

  const { loading, data } = useQuery<ShipDetailsData, ShipDetailsVars>(
    GET_SHIP_DETAILS, 
    { variables: { id }}
  )

  if (loading) {
    return <Loading />
  }


  const ship = data && data.ship
  console.log('ship: ', ship);

  if (ship) {
    return (
      <Grid container spacing={2}>
        <Grid container spacing={2} direction="column" item xs={12} md={6}>
          
          <Grid item>
            <Paper className={classes.papper}>
              <Typography component="p">{ship.name}</Typography>
              {ship.model && <Typography component="p" variant="subtitle2">{ship.model}</Typography>}
            </Paper>
          </Grid>

          <Grid item>
            <Paper className={classes.papper}>
              <Text label="IMO" value={ship.imo} />
              <Text label="MMSI" value={ship.mmsi} />
              <Text label="Type" value={ship.type} />
              <Text label="Class" value={ship.class} />
              <Text label="Year Built" value={ship.year_built} />
              <Text label="Status" value={ship.status} />
              <Typography component="p">Weight lbs / kg: {ship.weight_lbs} / {ship.weight_kg}</Typography>
              <Text label="Speed" value={ship.speed_kn} />
            </Paper>
          </Grid>

          <Grid item>
            <Paper className={classes.papper}>
              <Text label="Active" value={String(ship.active)} />
              <Text label="Attempted Landings" value={ship.attempted_landings} />
              <Text label="Successful Landings" value={ship.successful_landings} />
              {ship.url && <Typography component="p">Url: <Link href={ship.url} target="_blank">Source</Link></Typography>}
              <Typography component="p">Roles: {ship.roles}</Typography>
              <Text label="Home Port" value={ship.home_port} />
              <Text label="Course Deg" value={ship.course_deg} />
              <Text label="Abs" value={ship.abs} />
              <Typography component="p">position: {JSON.stringify(ship.position)}</Typography>
            </Paper>
          </Grid>

        </Grid>

        <Grid container spacing={2} direction="column" item xs={12} md={6}>
          <Grid item>
            <Paper className={classes.papper}>
              <img src={ship.image || undefined} alt={ship.name} className={classes.shipImage} />
            </Paper>
          </Grid>
          <Grid item>
            <MissionsPanel missions={ship.missions} />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
