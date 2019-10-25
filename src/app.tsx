import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider, withStyles } from '@material-ui/styles'

import { client } from './config'
import { RoutesSwitcher } from './routes'
import { useTheme, globalStyles } from './ui'
import { Navbar, Main } from './features/common'


const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>

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
