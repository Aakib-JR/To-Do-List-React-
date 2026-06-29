import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([
        { text: "Apple", completed: false },
        { text: "Banana", completed: false },
    ]);

    const [newTask, setNewTask] = useState("");

    // Input Change
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    // Add Task
    function addTask() {
        if (newTask.trim() !== "") {
            setTasks((prevTasks) => [...prevTasks, {
                text: newTask,
                completed: false,
            },
            ]);

            setNewTask("");
        }
    }

    // Delete Task
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    // Mark / Unmark Task
    function handleMark(index) {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );

        setTasks(updatedTasks);
    }

    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>

            <div>
                <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter a task..." />

                <button className="add-button" onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text" style={{ textDecoration: task.completed ? "line-through" : "none", color: task.completed ? "grey" : "black", }}>
                            {task.text}
                        </span>

                        <div>

                            <button className="delete-button" onClick={() => deleteTask(index)}>
                                Delete
                            </button>

                            <button className="mark-button" onClick={() => handleMark(index)}>
                                {task.completed ? "Unmark" : "Mark"}
                            </button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;