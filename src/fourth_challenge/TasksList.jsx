import React from "react";

export default function TasksList({ allTasks, handleDelete }) {
  return (
    <div>
      <ul>
        {allTasks.map((taskObject, id) => {
          return (
            <div>
              <li key={id}>
                <p>{taskObject.title}</p>
                <button onClick={() => handleDelete(id)}>X</button>
              </li>
              {taskObject.description ? <p>{taskObject.description}</p> : null}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
