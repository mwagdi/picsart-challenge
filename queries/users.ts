import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers($q: String, $_sort: String) {
    users(q: $q, _sort: $_sort) {
      id
      name
      email
      age
    }
  }
`;
