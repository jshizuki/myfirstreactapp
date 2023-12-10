import React from "react";

export default function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <div>
      <p>Fourth challenge - Task List</p>
      <p>Tasks</p>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={newTask.title || ""}
          onChange={handleChange}
          placeholder="New Task"
        />
        {!newTask.title ? null : (
          <textarea
            name="description"
            value={newTask.description || ""}
            onChange={handleChange}
            placeholder="Details..."
          />
        )}

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
