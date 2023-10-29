import { useQuery } from '@apollo/client';
import { UserSearchParams } from '@projectTypes/user';
import { GET_USERS } from '@queries/users';
import { useMemo } from 'react';

export const useGetUsers = (variables: UserSearchParams) => {
  const { data, loading, error } = useQuery(GET_USERS, { variables });

  const users = useMemo(() => data?.users.list || [], [data]);
  const pages = useMemo(() => data?.users.pages || 1, [data]);

  return { users, pages, loading, error };
};
