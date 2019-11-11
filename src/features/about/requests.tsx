import { gql } from 'apollo-boost'

export const GET_INFO = gql`
  {
    company {
      ceo
      coo
      cto_propulsion
      cto
      employees
      founded
      founder
      launch_sites
      name
      summary
      test_sites
      valuation
      vehicles
      links {
        elon_twitter
        flickr
        twitter
        website
      }
      headquarters {
        address
        city
        state
      }
    }
  }
`
