import { useState } from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const saveEdit = () => {
    if (newText.trim() === "") return;
    todo.text = newText;
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <div className="todo-content">
        {isEditing ? (
          <input
            className="edit-input"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <>
            <span className={todo.completed ? "completed" : ""}>
  {todo.text}
</span>

<small className={`category-badge ${todo.category}`}>
  {todo.category}
</small>


<small className="timestamp">
  Added on: {todo.createdAt}
</small>

          </>
        )}
      </div>

      <div className="actions">
        {isEditing ? (
          <button className="save-btn" onClick={saveEdit}>Save</button>
        ) : (
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}

        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
