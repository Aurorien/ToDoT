import { useState } from "react";
import type { ITodo } from "./types";
import { v4 as uuidv4 } from "uuid";
import { getTimestamp } from "./utils";
import "./AddForm.css";

interface AddFormProps {
  onAdd: (newTodo: ITodo) => void;
  onCancel: () => void;
}

function AddForm({ onAdd, onCancel }: AddFormProps) {
  const [todoData, setTodoData] = useState<Partial<ITodo>>({
    content: "",
    author: "",
  });

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todoData.content || !todoData.author) return;

    const newTodo: ITodo = {
      id: uuidv4(),
      content: todoData.content,
      author: todoData.author,
      timestamp: getTimestamp(),
      isCompleted: false,
    };
    onAdd(newTodo);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodoData((prev) => ({
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
            value={todoData.content}
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
            value={todoData.author}
            onChange={handleOnChange}
            required
          />
        </label>

        <div className="form-buttons-ctn">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </section>
  );
}

export default AddForm;
