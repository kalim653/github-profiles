import gql from "graphql-tag";

export const USER_PROFILE_QUERY = gql`
  query User($login: String!) {
    user(login: $login) {
      login
      url
      name
      email
      location
      bio
      company
      avatarUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      twitterUsername
    }
  }
`;
