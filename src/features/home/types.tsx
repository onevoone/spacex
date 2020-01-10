export interface UpcomingLaunchesProps {
  launchesUpcoming: {
    details: string | null;
    upcoming: boolean;
    is_tentative: boolean;
    id: string;
    launch_date_local: string;
    launch_date_unix: number;
    launch_date_utc: string;
    launch_site: {
      site_id: string;
      site_name_long: string;
      site_name: string;
    };
    links: {
      article_link: string | null;
      mission_patch_small: string | null;
      mission_patch: string | null;
      presskit: string | null;
      reddit_campaign: string | null;
      reddit_launch: string | null;
      reddit_media: string | null;
      reddit_recovery: string | null;
      video_link: string | null;
      wikipedia: string | null;
      flickr_images: [string];
    };
    mission_id: [string];
    mission_name: string;
  }
}
