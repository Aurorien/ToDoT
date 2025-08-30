import {
  ArrowDown,
  ArrowUp,
  // Pencil,
  Trash2,
} from "lucide-react";
import type { Direction, ITodo } from "./types";
import "./Todo.css";

interface TodoProps {
  todo: ITodo;
  onMove: (todo: ITodo, direction: Direction) => void;
  onRemove: (todo: ITodo) => void;
}

function Todo({ todo, onMove, onRemove }: TodoProps) {
  return (
    <li className="todo">
      <p className="todo-content">{todo.content}</p>
      <div className="todo-meta">
        <p>- {todo.author}</p>
        <p className="timestamp">{todo.timestamp}</p>
      </div>
      <section className="todo-action-icons">
        {/* <Pencil /> */}
        <Trash2 onClick={() => onRemove(todo)} />
        <ArrowUp onClick={() => onMove(todo, "UP")} />
        <ArrowDown onClick={() => onMove(todo, "DOWN")} />
      </section>
    </li>
  );
}

export default Todo;
