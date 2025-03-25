import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {Task} from '../data/types';
import {
  getAllTasks,
  getTasksByDate,
  addTask as addTaskToStorage,
  toggleTask,
  removeTask,
} from '../data/TaskStorage';

interface TaskContextProps {
  tasks: Task[];
  reload: () => void;
  add: (task: Omit<Task, 'id' | 'isDone'>) => void;
  toggle: (id: string) => void;
  remove: (id: string) => void;
}

const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  reload: () => {},
  add: () => {},
  toggle: () => {},
  remove: () => {},
});

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({children}: {children: ReactNode}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const reload = () => {
    setTasks(getAllTasks());
  };

  const add = (task: Omit<Task, 'id' | 'isDone'>) => {
    addTaskToStorage(task);
    reload();
  };

  const toggle = (id: string) => {
    toggleTask(id);
    reload();
  };

  const remove = (id: string) => {
    removeTask(id);
    reload();
  };

  useEffect(() => {
    reload();
  }, []);

  return (
    <TaskContext.Provider value={{tasks, reload, add, toggle, remove}}>
      {children}
    </TaskContext.Provider>
  );
};
