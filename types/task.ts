export type TaskType = {
  id: string;
  title: string;
  description: string;
};

export type TaskInputType = Omit<TaskType, 'id'>;
