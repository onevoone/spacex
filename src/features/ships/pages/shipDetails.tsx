import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@apollo/react-hooks'
import { Grid, Typography, Paper, makeStyles, Theme, Link } from '@material-ui/core'

import { Loading } from '../../common'
import { DetailsText } from '../atoms'
import { MissionsPanel } from '../molecules'
import { GET_SHIP_DETAILS } from '../requests'
import { ShipDetails as ShipDetailsData, ShipDetailsVars } from '../types'


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
              <DetailsText label="IMO" value={ship.imo} />
              <DetailsText label="MMSI" value={ship.mmsi} />
              <DetailsText label="Type" value={ship.type} />
              <DetailsText label="Class" value={ship.class} />
              <DetailsText label="Year Built" value={ship.year_built} />
              <DetailsText label="Status" value={ship.status} />
              <Typography component="p">Weight lbs / kg: {ship.weight_lbs} / {ship.weight_kg}</Typography>
              <DetailsText label="Speed" value={ship.speed_kn} />
            </Paper>
          </Grid>

          <Grid item>
            <Paper className={classes.papper}>
              <DetailsText label="Active" value={ship.active ? "Yes" : "No"} />
              <DetailsText label="Attempted Landings" value={ship.attempted_landings} />
              <DetailsText label="Successful Landings" value={ship.successful_landings} />
              <DetailsText 
                label="Url" 
                value={<Link href={String(ship.url)} target="_blank">Source</Link>} 
                expression={!!ship.url}
              />
              <Typography component="p">Roles: {ship.roles}</Typography>
              <DetailsText label="Home Port" value={ship.home_port} />
              <DetailsText label="Course Degree" value={ship.course_deg} />
              <DetailsText label="Abs" value={ship.abs} />
              <Typography component="p">
                Latitude / Longitude:&nbsp;
                <Link href={`https://www.marinetraffic.com/en/ais/home/centerx:${ship.position.longitude}/centery:${ship.position.latitude}/zoom:13`} target="_blank">
                  {ship.position.latitude} / {ship.position.longitude}
                </Link>
              </Typography>
              {/* <Typography component="p">position: {JSON.stringify(ship.position)}</Typography> */}
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
