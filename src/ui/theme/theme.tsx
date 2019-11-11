import React from 'react'
import { createMuiTheme, createStyles } from '@material-ui/core/styles'

import { themeVars, themeConfig } from './config'


export const useTheme = () => {
  const [mode, setMode] = React.useState(themeVars.DARK)

  const toggleTheme = () => {
    const next = mode === themeVars.DARK ? themeVars.LIGHT : themeVars.DARK
    setMode(next)
  }

  const theme = React.useMemo(() => createMuiTheme(themeConfig[mode]), [mode])

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
