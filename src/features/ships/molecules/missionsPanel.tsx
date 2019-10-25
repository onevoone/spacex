import React from 'react'
import { Typography,makeStyles, Theme, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, List, ListItem } from '@material-ui/core'

import { Mission } from '../types';


interface MissionsPanelProps {
  missions: Mission[];
}


const useStyles = makeStyles((theme: Theme) => ({
  papper: {
    padding: 20,
  },
  shipImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  panelHeading: {
    
  }
}))



export const MissionsPanel = ({ missions }: MissionsPanelProps) => {
  const classes = useStyles()

  const missionsView = Array.isArray(missions) && missions.map((obj: Mission, k: number) => (
    <ListItem key={k}>
      <Typography>Name: {obj.name}, Flight: {obj.flight}</Typography>
    </ListItem>
  ))

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        aria-controls="missions-content"
        id="missions-header"
      >
        <Typography className={classes.panelHeading}>Misssions</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List>
          {missionsView}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}