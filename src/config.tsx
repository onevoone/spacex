import ApolloClient from 'apollo-boost'


export const apolloClientConfig = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_SPACEX_URL,
})