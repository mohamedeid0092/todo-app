"use client";
import { useState } from "react";

interface tasks {
  task: { name: string; id: number; complete: boolean };
}

export default function Home() {
  const [tasks, setTasks] = useState<tasks[]>([]);
  const [task, setTask] = useState<string>("");
  return (
    <div>
      <h1>To Do App</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={() => {
            setTasks((prevTasks: any) => [
              ...prevTasks,
              { id: Date.now(), name: task, complete: false },
            ]);
            setTask("");
          }}
        >
          Add Task
        </button>
      </div>
      <div>
        tasks
        {tasks.map((task: any) => (
          <div>
            <h6
              style={{
                textDecorationLine: task.complete ? "line-through" : "none",
              }}
              key={task.id}
            >
              {task.name}
            </h6>
            <button
              onClick={() => {
                let updatedTasks = tasks.filter((t: any) => t.id !== task.id);
                setTasks(updatedTasks);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                setTasks((prev: any) =>
                  prev.id === task.id
                    ? { ...task, complete: !task.complete }
                    : task
                );
              }}
            >
              {task.complete ? "uncomplete" : "complete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
