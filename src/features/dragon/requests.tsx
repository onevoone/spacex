import { gql } from 'apollo-boost'

export const GET_DRAGON_DATA = gql`
  {
    dragon(id: "dragon2") {
      id
      crew_capacity
      description
      diameter {
        meters
        feet
      }
      dry_mass_kg
      dry_mass_lb
      first_flight
      heat_shield {
        material
        dev_partner
        size_meters
        temp_degrees
      }
      height_w_trunk {
        meters
        feet
      }
      launch_payload_mass {
        kg,
        lb
      }
      name
      return_payload_mass {
        kg,
        lb
      }
      wikipedia
    }
  }
`
