import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers($q: String) {
    users(q: $q) {
      id
      name
      email
      age
    }
  }
`;
