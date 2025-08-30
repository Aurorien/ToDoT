import type { ITodo } from "./types";
import Todo from "./Todo";
import { useList } from "./hooks/useList.ts";
import { initialTodos } from "./initialTodos.ts";
import "./TodoList.css";
import AddButton from "./AddButton.tsx";
import { useState } from "react";
import AddForm from "./AddForm.tsx";

function TodoList() {
  const todos = useList<ITodo>("todos", initialTodos);
  const [isAddFormActive, setIsAddFormActive] = useState<boolean>(false);

  if (!todos) {
    return <div>No todos yet.</div>;
  }

  const handleOnAdd = (newTodo: ITodo) => {
    todos.actions.add(newTodo);
    setIsAddFormActive(false);
  };

  const handleOnCancel = () => {
    setIsAddFormActive(false);
  };

  return (
    <>
      <AddButton onClick={() => setIsAddFormActive(true)} />
      {isAddFormActive && (
        <AddForm onAdd={handleOnAdd} onCancel={handleOnCancel} />
      )}
      <section>
        <ol className="todo-list">
          {todos.list.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onMove={todos.actions.move}
              onRemove={todos.actions.remove}
            />
          ))}
        </ol>
      </section>
    </>
  );
}

export default TodoList;
