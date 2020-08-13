export const getSchoolsQuery = () => ({
  query: `query getSchools ($search: String!) {
    schools(search: $search) {
        schools {
            id
            name
        }
    }
  }`,
  variables: { search: "" },
});

export const getTeamsQuery = () => ({
  query: `query getTeams ($search: String!) {
    teams(search: $search) {
        teams {
            id
            name
        }
    }
  }`,
  variables: { search: "" },
});

export const getFacilitiesQuery = () => ({
  query: `query getFacilities ($search: String!) {
    facilities(search: $search) {
        facilities {
            id
            email
            u_name
        }
    }
  }`,
  variables: { search: "" },
});

export const getBattingLeaderboardQuery = (config) => ({
  query: `query LeaderboardBatting ($input: FilterLeaderboardInput!) {
  leaderboard_batting(input: $input) {
      leaderboard_batting {
          batter_name
          exit_velocity
          launch_angle
          distance
          batter_datraks_id
          age
          school {
            id
            name
          }
          teams {
            id
            name
          }
          favorite
      }
  }
}`,
  variables: { input: config },
});

export const getPitchingLeaderboardQuery = (config) => ({
  query: `query LeaderboardPitching ($input: FilterLeaderboardInput!) {
  leaderboard_pitching(input: $input) {
      leaderboard_pitching {
          pitcher_name
          pitch_type
          velocity
          spin_rate
          vertical_break
          horizontal_break
          pitcher_datraks_id
          age
          school {
            id
            name
          }
          teams {
            id
            name
          }
          favorite
      }
  }
}`,
  variables: { input: config },
});
