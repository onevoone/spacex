import React from 'react'
import { useHistory } from 'react-router'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Card , CardActionArea, CardActions, 
  CardContent, CardMedia, Button, Typography
} from '@material-ui/core'

import { Ship } from '../../types'
import { defaultImageSrc } from '../../../../assets'


const useStyles = makeStyles({
  card: {
    width: 320,
  },
  media: {
    height: 140,
  },
})


export const ShipGridViewItem = ({ name, type, home_port, id, image }: Ship) => {
  const { push } = useHistory()
  const classes = useStyles()

  const imageSrc = !!image ? image : defaultImageSrc

  const viewShipDetails = () => {
    push(`/ships/${id}`)
  }

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={viewShipDetails}>
        <CardMedia
          className={classes.media}
          image={imageSrc}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Type: {type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Port: {home_port}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={viewShipDetails}>
          Details
        </Button>
      </CardActions>
    </Card>
  )
}
