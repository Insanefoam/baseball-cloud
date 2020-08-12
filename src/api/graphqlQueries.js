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
