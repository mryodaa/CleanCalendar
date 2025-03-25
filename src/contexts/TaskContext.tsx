import React, {createContext, useContext, useEffect, useState} from 'react';
import {MMKV} from 'react-native-mmkv';
import {Task} from '../data/types';
import {scheduleNotification, cancelNotification} from '../utils/notifications';
import uuid from 'react-native-uuid';
import {Alert} from 'react-native';

const storage = new MMKV();

interface TaskContextProps {
  tasks: Task[];
  add: (
    task: Omit<Task, 'id' | 'isDone' | 'notificationId'> & {reminder?: boolean},
  ) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
  toggleReminder: (id: string) => void;
  update: (updatedTask: Task, reminder: boolean) => void;
}

export const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  add: () => {},
  remove: () => {},
  toggle: () => {},
  toggleReminder: () => {},
  update: () => {},
});

export const TaskProvider = ({children}: {children: React.ReactNode}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const raw = storage.getString('tasks');
    if (raw) {
      setTasks(JSON.parse(raw));
    }
  }, []);

  useEffect(() => {
    storage.set('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const add = async (
    task: Omit<Task, 'id' | 'isDone' | 'notificationId'> & {reminder?: boolean},
  ) => {
    const id = uuid.v4().toString();

    let notificationId: string | undefined;

    if (task.reminder && task.time) {
      notificationId = await scheduleNotification({
        ...task,
        id,
        isDone: false,
      });
    }

    const newTask: Task = {
      ...task,
      id,
      isDone: false,
      notificationId,
    };

    setTasks(prev => [...prev, newTask]);
  };

  const remove = async (id: string) => {
    const taskToRemove = tasks.find(t => t.id === id);
    if (taskToRemove?.notificationId) {
      await cancelNotification(taskToRemove.notificationId);
    }
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const toggle = (id: string) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? {...t, isDone: !t.isDone} : t)),
    );
  };

  const toggleReminder = async (id: string) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    if (task.notificationId) {
      await cancelNotification(task.notificationId);

      setTasks(prev =>
        prev.map(t => (t.id === id ? {...t, notificationId: undefined} : t)),
      );
    } else {
      if (!task.time) {
        Alert.alert(
          'Невозможно включить напоминание',
          'Для задачи не указано время',
        );
        return;
      }

      const notificationId = await scheduleNotification(task);

      setTasks(prev =>
        prev.map(t => (t.id === id ? {...t, notificationId} : t)),
      );
    }
  };

  const update = async (updatedTask: Task, reminder: boolean) => {
    const oldTask = tasks.find(t => t.id === updatedTask.id);
    if (!oldTask) return;

    if (oldTask.notificationId) {
      await cancelNotification(oldTask.notificationId);
    }

    let notificationId: string | undefined;

    if (reminder && updatedTask.time) {
      notificationId = await scheduleNotification(updatedTask);
    }

    const finalTask: Task = {
      ...updatedTask,
      notificationId,
    };

    setTasks(prev => prev.map(t => (t.id === updatedTask.id ? finalTask : t)));
  };

  return (
    <TaskContext.Provider
      value={{tasks, add, remove, toggle, toggleReminder, update}}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
