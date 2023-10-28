import { gql, useQuery } from '@apollo/client';

const GET_TASKS = gql`
  query GetLocations {
    tasks {
      id
      title
    }
  }
`;

export const TasksList = () => {
  const { data } = useQuery(GET_TASKS);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  console.log(data.tasks);

  return <p>Tasks list</p>;
};
