import { useQuery } from '@apollo/client';
import { GET_USERS } from '@queries/users';
import { useMemo } from 'react';

export const useGetUsers = (q?: string) => {
  const { data, loading, error } = useQuery(GET_USERS, { variables: { q } });

  const users = useMemo(() => data?.users || [], [data]);

  return { users, loading, error };
};
