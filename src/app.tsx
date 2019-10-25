import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider, withStyles } from '@material-ui/styles'

import { RoutesSwitcher } from './routes'
import { apolloClientConfig } from './config'
import { useTheme, globalStyles } from './ui'
import { Navbar, Main } from './features/common'


const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClientConfig}>

        <ThemeProvider theme={theme}>
          <Navbar toggleTheme={toggleTheme} />
          <Main>
            <RoutesSwitcher />
          </Main>
        </ThemeProvider>
        
      </ApolloProvider>
    </BrowserRouter>
    )
}

export default withStyles(globalStyles)(App)
