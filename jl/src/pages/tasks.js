import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";


export default function Tasks() {
const [tasks, setTasks] = useState([]);


useEffect(() => {
setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
}, []);


useEffect(() => {
localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);


return (
<div className="card">
<h2>Tasks</h2>
<TaskForm setTasks={setTasks} />
<TaskList tasks={tasks} setTasks={setTasks} />
</div>
);
}