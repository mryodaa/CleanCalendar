import {useCallback, useEffect, useState} from 'react';
import {Task} from '../data/types';
import {
  getTasksByDate,
  toggleTask,
  removeTask,
  addTask as addTaskToStorage,
  getAllTasks,
} from '../data/TaskStorage';

export const useTasks = (date: string) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = useCallback(() => {
    const loaded = date ? getTasksByDate(date) : getAllTasks();
    setTasks(loaded);
  }, [date]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const toggle = (id: string) => {
    toggleTask(id);
    loadTasks();
  };

  const remove = (id: string) => {
    removeTask(id);
    loadTasks();
  };

  const add = (task: Omit<Task, 'id' | 'isDone'>) => {
    addTaskToStorage(task);
    loadTasks();
  };

  return {
    tasks,
    reload: loadTasks,
    toggle,
    remove,
    add,
  };
};
