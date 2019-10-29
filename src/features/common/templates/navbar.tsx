import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { AppBar, Toolbar, Link, Button, Box, Typography } from '@material-ui/core'

import { ShipsViewToggler } from '../molecules'


interface Navbar {
  toggleTheme: () => void;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: {
      flexGrow: 1,
    }
  }),
)


export const Navbar = ({ toggleTheme, ...props }: Navbar) => {
  const classes = useStyles()

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Box component="nav" className={classes.nav}>
          <Link to="/ships" component={RouterLink}><Typography>Ships</Typography></Link>
        </Box>
        <ShipsViewToggler />
        <Button type="button" size="small" onClick={toggleTheme}>theme</Button>
      </Toolbar>
    </AppBar>
  )
}