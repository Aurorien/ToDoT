export interface ITodo {
  id: string;
  content: string;
  author: string;
  timestamp: string;
  isCompleted: boolean;
}

export type Direction = "UP" | "DOWN";
