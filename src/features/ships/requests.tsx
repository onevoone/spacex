import { gql } from 'apollo-boost'

export const GET_SHIPS = gql`
  {
    ships {
      id
      image
      home_port
      name
      type
    }
  }
`

export const GET_SHIP_DETAILS = gql`
  query getShipDetails($id: ID!) {
    ship(id: $id) {
      id
      name
      model
      position {
        latitude
        longitude
      }
      image
      status
      successful_landings
      type
      url
      weight_lbs
      year_built
      weight_kg
      speed_kn
      roles
      missions {
        flight
        name
      }
      imo
      mmsi
      home_port
      course_deg
      class
      attempted_landings
      active
      abs
    }
  }
`