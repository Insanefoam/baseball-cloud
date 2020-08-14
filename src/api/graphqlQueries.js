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

export const updateFavoriteQuery = (id, value) => ({
  query: `mutation UpdateFavoriteProfile ($form: UpdateFavoriteProfileInput!) {
  update_favorite_profile (input: $form) {
    favorite
    }
  }`,
  variables: { form: { profile_id: id, favorite: value } },
});

export const getProfilesQuery = (count, offset) => ({
  query: `query Profiles ($input: FilterProfilesInput!) {
    profiles (input: $input) {
      profiles {
        id
        first_name
        last_name
        position
        position2
        school_year
        feet
        inches
        weight
        age
        events {
          id
        }
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
      total_count
      }
    }`,
  variables: { input: { profiles_count: count, offset } },
});
