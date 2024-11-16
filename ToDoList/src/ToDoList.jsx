import React, { useState, useEffect } from "react";
import './ToDoList.css';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [showInput, setShowInput] = useState(false);
    const [isEditing, setIsEditing] = useState(null);
    const [editTaskText, setEditTaskText] = useState("");

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, { text: newTask, done: false }]);
            setNewTask("");
            setShowInput(false);
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function toggleDone(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].done = !updatedTasks[index].done;
        setTasks(updatedTasks);
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function startEditing(index) {
        setIsEditing(index);
        setEditTaskText(tasks[index].text);
    }

    function saveEdit(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].text = editTaskText;
        setTasks(updatedTasks);
        setIsEditing(null);
    }

    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>
            
            <button 
                className="show-input-button" 
                onClick={() => setShowInput(!showInput)}>
                {showInput ? "Cancel" : "Add Task"}
            </button>

            {showInput && (
                <div className="input-container">
                    <input 
                        type="text" 
                        placeholder="Enter a task..." 
                        value={newTask} 
                        onChange={handleInputChange} 
                    />
                    <button className="add-button" onClick={addTask}>Add Task</button>
                </div>
            )}

            <ol>
                {tasks.map((task, index) =>
                    <li key={index} className="task-item">
                        {isEditing === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editTaskText}
                                    onChange={(e) => setEditTaskText(e.target.value)}
                                />
                                <button onClick={() => saveEdit(index)} className="save-button">Save</button>
                                <button onClick={() => setIsEditing(null)} className="cancel-button">Cancel</button>
                            </>
                        ) : (
                            <>
                                <span className={`task-text ${task.done ? "done" : ""}`}>{task.text}</span>
                                <input 
                                    className="checkbox" 
                                    type="checkbox" 
                                    checked={task.done} 
                                    onChange={() => toggleDone(index)} 
                                />
                                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                                <button className="edit-button" onClick={() => startEditing(index)}>Edit</button>
                                <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                                <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
                            </>
                        )}
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;
