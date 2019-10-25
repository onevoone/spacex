import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { AppBar, Toolbar, Link, Button, Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'


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


export const Navbar = ({ toggleTheme }: Navbar) => {
  const classes = useStyles()

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Box component="nav" className={classes.nav}>
          <Link to="/ships" component={RouterLink}>Ships</Link>
        </Box>
        <Button type="button" size="small" onClick={toggleTheme}>theme</Button>
      </Toolbar>
    </AppBar>
  )
}