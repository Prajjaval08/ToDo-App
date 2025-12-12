import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("Personal");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value, category);
    setValue("");
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <select
        className="category-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Personal</option>
        <option>Work</option>
        <option>Study</option>
        <option>Others</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
