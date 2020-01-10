import React from 'react'
import YouTube, { Options } from 'react-youtube'
import { makeStyles } from '@material-ui/styles'
import { UpcomingLaunches } from '../organisms'



const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 999,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '41.7%' /* 16:9 */,
      backgroundColor: '#000',
    },
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
})


const videoOptions: Options = {
  playerVars: {
    autoplay: 1,
    controls: 0,
    loop: 1,
    disablekb: 1,
    modestbranding: 1,
    showinfo: 0,
    rel: 0,
    iv_load_policy: 3,
    cc_load_policy: 1,
  }
}



export const Home = () => {
  const classes = useStyles()


  const onReady = (e: any) => {
    e.target.playVideo()
    e.target.mute()
  }

  const onEnd = (e: any) => {
    e.target.playVideo()
  }

  return (
    <div className={classes.root}>
      <div className={classes.overlay} />
      <YouTube
        videoId="C8JyvzU0CXU"
        opts={videoOptions}
        className={classes.video}
        onEnd={onEnd}
        onReady={onReady}
        containerClassName={classes.videoContainer}
      />
      <UpcomingLaunches />
    </div>
  )
}
