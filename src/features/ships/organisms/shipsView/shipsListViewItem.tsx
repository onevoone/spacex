import React from 'react'
import { useHistory } from 'react-router'
import { makeStyles } from '@material-ui/styles'
import { ListItem, ListItemIcon, ListItemText, ListItemAvatar, Avatar, Typography, Box } from '@material-ui/core'

import { Ship } from '../../types'
import { defaultImageSrc } from '../../../../assets'


const useStyles = makeStyles({
  item: {
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    marginRight: 30,
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
  },
})


export const ShipListViewItem = ({ id, image, name, type, home_port }: Ship) => {
  const { push } = useHistory()
  const classes = useStyles()

  const viewShipDetails = () => {
    push(`/ships/${id}`)
  }
  const imageSrc = !!image ? image : defaultImageSrc

  return (
    <ListItem button onClick={viewShipDetails} className={classes.item}>
      <ListItemAvatar>
        <Avatar alt={name} src={imageSrc} className={classes.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <span className={classes.description}>
            <Typography variant="body2" color="textSecondary" component="span">
              Type: {type}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span">
              Port: {home_port}
            </Typography>
          </span>
        }
      />
    </ListItem>
  )
}