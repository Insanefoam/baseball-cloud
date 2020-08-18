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

export const getProfilesQuery = (config) => ({
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
  variables: { input: config },
});

export const getCurrentProfileQuery = () => ({
  query: `{current_profile () {
    id
    first_name
    last_name
    position
    position2
    avatar
    throws_hand
    bats_hand
    biography
    school_year
    feet
    inches
    weight
    age
    school {
      id
      name
    }
    teams {
      id
      name
    }
    facilities {
      id
      email
      u_name
    }
  }}`,
});

export const getProfileQuery = (id) => ({
  query: `query Profile($id: String!){
  profile(id: $id){
    id
    first_name
    last_name
    position
    position2
    school_year
    avatar
    throws_hand
    bats_hand
    biography
    feet
    inches
    weight
    age
    recent_events
     {id
      event_type
      event_name
      date
      is_pitcher
      data_rows_count
      recent_avatars
       {id
        first_name
        last_name
        avatar
       }
      }
    winsgspan
    grip_right
    grip_left
    wrist_to_elbow
    broad_jump
    grip_left
    act_score
    gpa_score
    sat_score
    batting_top_values
     {pitch_type
      distance
      launch_angle
      exit_velocity
     }
    pitching_top_values
      {velocity 
       spin_rate
       pitch_type
      }
    pitcher_summary 
      {velocity
       spin_rate
       horizontal_break
      }
    batter_summary 
      {exit_velocity
       distance
       launch_angle
      }
    school
      {id
      name
      }
    teams 
      {id
       name
      }
    facilities 
      {id
       email
       u_name
      }
    favorite
    events_opened
    paid
  }
}`,
  variables: { id },
});

export const getBattingSummaryQuery = (id) => ({
  query: `query BattingSummary ($id: ID!) {
    batting_summary (id: $id) {
      top_values {
        id
        distance
        pitch_type
        launch_angle
        exit_velocity
      }
      average_values {
        id
        distance
        pitch_type
        launch_angle
        exit_velocity
      }
    }
  }`,
  variables: { id },
});
