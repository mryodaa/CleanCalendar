import {Task} from './data/types';

export type RootStackParamList = {
  Calendar: undefined;
  TaskList: undefined;
  EditTask: {task: Task};
};
