import React from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider, withStyles } from '@material-ui/styles'

import { store } from './store'
import { RoutesSwitcher } from './routes'
import { apolloClientConfig } from './config'
import { useTheme, globalStyles } from './ui'
import { Navbar, Main } from './features/common'


const App = () => {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default withStyles(globalStyles)(App)
