export type Priority = 'low' | 'medium' | 'high';
export type RepeatType = 'none' | 'daily' | 'weekly';

export interface Task {
  id: string;
  title: string;
  description?: string;
  category: string;
  date: string; // YYYY-MM-DD
  time?: string; // HH:mm
  isDone: boolean;
  repeat: RepeatType;
  priority: Priority;
}
// THEME
export type ThemeType = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  text: string;
  button: string;
  buttonText: string;
}
