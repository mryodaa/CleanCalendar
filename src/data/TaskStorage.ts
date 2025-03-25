import {MMKV} from 'react-native-mmkv';
import {Task} from './types';
import {nanoid} from 'nanoid/non-secure';

const storage = new MMKV();
const TASKS_KEY = 'tasks';

export const getAllTasks = (): Task[] => {
  const json = storage.getString(TASKS_KEY);
  return json ? JSON.parse(json) : [];
};

export const getTasksByDate = (date: string): Task[] => {
  return getAllTasks().filter(task => task.date === date);
};

export const addTask = (task: Omit<Task, 'id' | 'isDone'>): Task => {
  const newTask: Task = {
    ...task,
    id: nanoid(),
    isDone: false,
  };

  const updated = [...getAllTasks(), newTask];
  storage.set(TASKS_KEY, JSON.stringify(updated));
  return newTask;
};

export const toggleTask = (id: string) => {
  const tasks = getAllTasks();
  const updated = tasks.map(task =>
    task.id === id ? {...task, isDone: !task.isDone} : task,
  );
  storage.set(TASKS_KEY, JSON.stringify(updated));
};

export const removeTask = (id: string) => {
  const updated = getAllTasks().filter(task => task.id !== id);
  storage.set(TASKS_KEY, JSON.stringify(updated));
};

export const clearTasks = () => {
  storage.delete(TASKS_KEY);
};
