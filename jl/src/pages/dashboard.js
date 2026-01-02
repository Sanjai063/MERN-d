export default function Dashboard() {
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const completed = tasks.filter(t => t.completed).length;
const name = localStorage.getItem("username");


return (
<div className="card">
<h2>Welcome, {name}</h2>
<div className="dashboard">
<div className="stat"><h3>Total Tasks</h3><p>{tasks.length}</p></div>
<div className="stat"><h3>Completed</h3><p>{completed}</p></div>
<div className="stat"><h3>Pending</h3><p>{tasks.length - completed}</p></div>
</div>
</div>
);
}