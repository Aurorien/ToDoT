import { useState } from "react";
import type { ITodo } from "./types";
import { v4 as uuidv4 } from "uuid";
import { getTimestamp } from "./utils";
import "./AddForm.css";

interface AddFormProps {
  onAdd: (newTodo: ITodo) => void;
}

function AddForm({ onAdd }: AddFormProps) {
  const [newTodo, setNewTodo] = useState<ITodo>({
    id: uuidv4(),
    content: "",
    author: "",
    timestamp: getTimestamp(),
    isCompleted: false,
  });

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(newTodo);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTodo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="add-form">
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="todo-content">
          Todo:
          <input
            id="todo-content"
            type="text"
            name="content"
            value={newTodo.content}
            onChange={handleOnChange}
            required
          />
        </label>

        <label htmlFor="todo-author">
          Author:
          <input
            id="todo-author"
            type="text"
            name="author"
            value={newTodo.author}
            onChange={handleOnChange}
            required
          />
        </label>

        <button type="submit">Save</button>
      </form>
    </section>
  );
}

export default AddForm;
