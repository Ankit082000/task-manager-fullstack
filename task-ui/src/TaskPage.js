import { useEffect, useState } from "react";

const API_URL = "http://localhost:8080/tasks";

function TaskPage({ token, onLogout }) {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const fetchTasks = () => {
        fetch(API_URL, {
            headers: { Authorization: token },
        })
            .then((res) => res.json())
            .then((data) => setTasks(data));
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = () => {
        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({ title, description, completed: false }),
        }).then(fetchTasks);
    };

    const deleteTask = (id) => {
        fetch(`${API_URL}/${id}`, {
            method: "DELETE",
            headers: { Authorization: token },
        }).then(fetchTasks);
    };

    const toggleTask = (task) => {
        fetch(`${API_URL}/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({
                ...task,
                completed: !task.completed,
            }),
        }).then(fetchTasks);
    };


    return (
        <div className="container">
            <button className="secondary" onClick={onLogout}>Logout</button>

            <h1>Task Manager</h1>

            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button className="primary" onClick={addTask}>
                Add Task
            </button>

            {tasks.map((task) => (
                <div key={task.id} className="card">
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>

                    <p className={`status ${task.completed ? "completed" : "pending"}`}>
                        {task.completed ? "✔ Completed" : "❌ Pending"}
                    </p>

                    <button className="secondary" onClick={() => toggleTask(task)}>
                        Click To Complete/Incomplete
                    </button>

                    <button className="danger" onClick={() => deleteTask(task.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TaskPage;