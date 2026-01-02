export default function TaskList({ tasks, setTasks }) {
if (tasks.length === 0) return <p>No tasks available</p>;


const toggle = id => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
const del = id => setTasks(tasks.filter(t => t.id !== id));


return (
<ul>
{tasks.map(t => (
<li key={t.id}>
<span className={t.completed ? "done" : ""}>{t.title}</span>
<div>
<button onClick={() => toggle(t.id)}>✔</button>
<button onClick={() => del(t.id)}>🗑</button>
</div>
</li>
))}
</ul>
);
}