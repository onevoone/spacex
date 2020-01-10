import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { makeStyles } from '@material-ui/styles'
import { Box, Typography, Paper, Link, Grid } from '@material-ui/core'

import { Info } from '../types'
import { GET_INFO } from '../requests'
import { Loading, Main } from '../../common'


const useStyles = makeStyles({
  root: {
    minHeight: 80,
    padding: '0 30px',
    color: '#fff',
    backgroundColor: '#181c1f',
  },
  title: {
    flexGrow: 1,
    '& > h3': {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    }
  },
  fact: {
    '& > *': {
      textTransform: 'uppercase',
      padding: '0 40px 0 30px',
      borderLeft: '1px dashed #555',
    },
  },
  factName: {
    fontSize: 10,
    color: '#4b5256',
  },
  factValue: {
    fontSize: 22,
    color: '#8b939b',
  },
})



export const QuickFacts = ({ company }: any) => {
  const classes = useStyles()

  return (
    <Grid container alignItems="center" className={classes.root}>
      <Grid item className={classes.title}>
        <Typography component="h3">Quick facts about spacex:</Typography>
      </Grid>
      <Grid item>
        <Box className={classes.fact}>
          <Typography className={classes.factName}>Founded</Typography>
          <Typography className={classes.factValue}>{company.founded}</Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box className={classes.fact}>
          <Typography className={classes.factName}>Vehicles</Typography>
          <Typography className={classes.factValue}>{company.vehicles}</Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box className={classes.fact}>
          <Typography className={classes.factName}>Launches contracted</Typography>
          <Typography className={classes.factValue}>{company.launch_sites}</Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box className={classes.fact}>
          <Typography className={classes.factName}>Employees</Typography>
          <Typography className={classes.factValue}>{company.employees}</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
