export interface Task {
  id: string;
  title: string;
  category: string;
  date: string; // YYYY-MM-DD
  isDone: boolean;
  repeat?: 'none' | 'daily' | 'weekly';
  time?: string; // HH:mm
}

// THEME
export type ThemeType = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  text: string;
  button: string;
  buttonText: string;
}
