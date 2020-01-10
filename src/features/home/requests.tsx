import { gql } from 'apollo-boost'

export const GET_UPCOMING_LAUNCHES = gql`
  {
    launchesUpcoming {
      details
      upcoming
      is_tentative
      id
      launch_date_local
      launch_date_unix
      launch_date_utc
      launch_site {
        site_id
        site_name_long
        site_name
      }
      links {
        article_link
        mission_patch_small
        mission_patch
        presskit
        reddit_campaign
        reddit_launch
        reddit_media
        reddit_recovery
        video_link
        wikipedia
        flickr_images
      }
      mission_id
      mission_name
    }
  }
`
