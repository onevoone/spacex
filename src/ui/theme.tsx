import React from 'react'
import { createMuiTheme, createStyles } from '@material-ui/core/styles'


const themeConfig ={
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
    },
    '#root': {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }
  }
})
