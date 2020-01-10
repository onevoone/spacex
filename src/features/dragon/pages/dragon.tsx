import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { makeStyles } from '@material-ui/styles'
import { Box, Typography, Grid, Container } from '@material-ui/core'

import { DragonTypes } from '../types'
import { GET_DRAGON_DATA } from '../requests'
import { Loading } from '../../common'


const DRAGON_VIDEO_URL = 'https://www.spacex.com/sites/spacex/files/spinningdragon_web4x3_text_callouts_v04_fix_1.mp4'


const useStyles = makeStyles({
  root: {
    minHeight: 'calc(100vh - 65px)',
    paddingTop: 40,
    backgroundColor: 'black',
    position: 'relative',
    zIndex: 0,
    overflow: 'hidden',
  },
  title: {
    color: 'white',
    textTransform: 'uppercase',
    borderBottom: '1px dashed #999',
    paddingBottom: 25,
    marginBottom: 30,
    width: '100%',
  },
  text: {
    color: 'white',
  },
  overviewTitle: {
    fontWeight: 700,
    color: 'white',
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  textWrapper: {
    margin: '20px 0',
  },
  stats: {
    marginBottom: '1rem',
  },
  statsTitle: {
    borderBottom: '1px solid #888',
    paddingBottom: '.3125rem',
    marginBottom: '.3125rem',
    fontSize: '.6875rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#888',
  },
  statsValue: {
    color: 'white',
  },
  statsValueSecondary: {
    color: "#888",
    lineHeight: 1.7,
    marginLeft: 5,
  },
  video: {
    position: 'absolute',
    height: 1170,
    width: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: -1,
  },
})


export const Dragon = () => {
  const classes = useStyles()
  const { loading, data } = useQuery<DragonTypes>(GET_DRAGON_DATA)

  if (loading) {
    return <Loading />
  }

  const dragon = data!.dragon

  return (
    <Box component="main" className={classes.root}>
      <Container>
        <Grid container>
          <Typography component="h2" variant="h2" className={classes.title}>{dragon.name}</Typography>
        </Grid>
      </Container>
      <Container>
        <Grid container item direction="column">
          <Typography variant="h5" className={classes.overviewTitle}>Overview</Typography>
          <Grid container item sm={5} className={classes.textWrapper}>
            <Typography className={classes.text}>{dragon.description}</Typography>
          </Grid>
          <Grid container item sm={5} justify="space-between">
            <Grid container item direction="column" sm={4}>
              <Grid item className={classes.stats}>
                <Typography className={classes.statsTitle}>Diameter</Typography>
                <Box display="flex" alignItems="flex-end">
                  <Typography component="p" variant="h4" className={classes.statsValue}>{dragon.diameter.meters}m</Typography>
                  <Typography component="p" variant="body2" className={classes.statsValueSecondary}> /{dragon.diameter.feet}ft</Typography>
                </Box>
              </Grid>
              <Grid item className={classes.stats}>
                <Typography className={classes.statsTitle}>Launch payload mass</Typography>
                <Box display="flex" alignItems="flex-end">
                  <Typography component="p" variant="h4" className={classes.statsValue}>{dragon.launch_payload_mass.kg}kg</Typography>
                  <Typography component="p" variant="body2" className={classes.statsValueSecondary}> /{dragon.launch_payload_mass.lb}lbs</Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container item direction="column" sm={4}>
              <Grid item className={classes.stats}>
                <Typography className={classes.statsTitle}>Height</Typography>
                <Box display="flex" alignItems="flex-end">
                  <Typography component="p" variant="h4" className={classes.statsValue}>{dragon.height_w_trunk.meters}m</Typography>
                  <Typography component="p" variant="body2" className={classes.statsValueSecondary}> /{dragon.height_w_trunk.feet}ft</Typography>
                </Box>
              </Grid>
              <Grid item className={classes.stats}>
                <Typography className={classes.statsTitle}>Return payload mass</Typography>
                <Box display="flex" alignItems="flex-end">
                  <Typography component="p" variant="h4" className={classes.statsValue}>{dragon.return_payload_mass.kg}kg</Typography>
                  <Typography component="p" variant="body2" className={classes.statsValueSecondary}> /{dragon.return_payload_mass.lb}lbs</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <video loop muted autoPlay playsInline className={classes.video}>
            <source src={DRAGON_VIDEO_URL} type="video/mp4" />
          </video>
        </Grid>
      </Container>
    </Box>
  )
}
