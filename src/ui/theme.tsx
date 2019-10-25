import React from 'react'
import { createMuiTheme, createStyles } from '@material-ui/core/styles'

import { fonts } from './fonts'


const themeConfig = {
  typography: {
    fontFamily: 'Catamaran, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': fonts
      },
    },
  },
  palette: {
    // primary: blue,
  },
}


export const useTheme = () => {
  const [mode, setMode] = React.useState("light")

  const toggleTheme = () => {
    const next = mode === "light" ? "dark" : "light"
    setMode(next)
  }

  const theme = React.useMemo(() => {
    const nextTheme = mode === "light" ? themeConfig : themeConfig
    return createMuiTheme(nextTheme)
  }, [mode])

  return { theme, toggleTheme }
}


export const globalStyles = createStyles({
  '@global': {
    html: {
      boxSizing: 'border-box',
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: '0 !important',
      backgroundColor: '#e5e7e9'
    },
    '#root': {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }
  }
})
