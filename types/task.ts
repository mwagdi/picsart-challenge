export type TaskType = {
  id: number;
  title: string;
  description: string;
};

export type TaskInputType = Omit<TaskType, 'id'>;
