import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers($q: String, $_sort: String, $_page: Int) {
    users(q: $q, _sort: $_sort, _page: $_page) {
      list {
        id
        name
        email
        age
      }
      pages
    }
  }
`;
