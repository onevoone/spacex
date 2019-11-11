import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { AppBar, Toolbar, Link, Button, Box, Typography } from '@material-ui/core'

import { ShipsViewToggler } from '../molecules'
import { NavLinkProps, NavbarProps } from '../types'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
    },
    nav: {
      flexGrow: 1,
      '& > ul': {
        width: 'max-content',
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
        '& > a:not(:last-child)': {
          marginRight: 15,
        },
      },
    },
    link: {
      padding: '4px 0 2px',
      borderBottom: '2px solid transparent',
      textDecoration: 'none',
      transition: 'border-color 150ms ease',
      '&:hover': {
        textDecoration: 'none',
        borderColor: '#fff',
      },
      '& > span': {
        textTransform: 'uppercase',
        fontSize: 14,
        letterSpacing: 2,
      },
    },
  }),
)

const LinkElement = React.memo(({ path, label, className }: NavLinkProps) => (
  <Link to={path} component={RouterLink} color="textPrimary" className={className} activeStyle={{ borderColor: '#fff' }}>
    <Typography component="span">{label}</Typography>
  </Link>
))

export const Navbar = ({ toggleTheme }: NavbarProps) => {
  const classes = useStyles()

  return (
    <AppBar position="static" color="inherit" className={classes.root}>
      <Toolbar>
        <Box>
          <Link to="/" component={RouterLink}>
            <img src="https://www.spacex.com/sites/spacex/files/spacex_logo_white.png" alt="Home" />
          </Link>
        </Box>
        <Box component="nav" className={classes.nav}>
          <Box component="ul">
            <LinkElement path="/ships" label="Ships" className={classes.link} />
            <LinkElement path="/about" label="About" className={classes.link} />
          </Box>
        </Box>
        <ShipsViewToggler />
        <Button type="button" size="small" onClick={toggleTheme}>theme</Button>
      </Toolbar>
    </AppBar>
  )
}