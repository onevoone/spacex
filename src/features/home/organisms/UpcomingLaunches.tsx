import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useRouteMatch } from 'react-router'
import { makeStyles } from '@material-ui/styles'
import { Grid, Button, ButtonGroup, Box } from '@material-ui/core'

import { UpcomingLaunchesProps } from '../types'
import { GET_UPCOMING_LAUNCHES } from '../requests'



const useStyles = makeStyles({
  root: {
    width: 'max-content',
    marginRight: 10,
  },
})


export const UpcomingLaunches = () => {
  const classes = useStyles()
  const { loading, data, error } = useQuery<UpcomingLaunchesProps>(GET_UPCOMING_LAUNCHES)

  if (loading || error) {
    return null
  }

  const launches = data!.launchesUpcoming

  return (
    <div />
  )
}
