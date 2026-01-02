import { useState, useEffect } from "react";


export default function Events() {
const [events, setEvents] = useState([]);
const [name, setName] = useState("");


useEffect(() => {
setEvents(JSON.parse(localStorage.getItem("events")) || []);
}, []);


useEffect(() => {
localStorage.setItem("events", JSON.stringify(events));
}, [events]);


const addEvent = () => {
if (!name) return;
setEvents([...events, { id: Date.now(), name }]);
setName("");
};


const removeEvent = (id) => {
setEvents(events.filter(e => e.id !== id));
};
return (
<div className="card">
<h2>Events</h2>


<input
value={name}
onChange={(e) => setName(e.target.value)}
placeholder="Event name"
/>
<button onClick={addEvent}>Add Event</button>


{events.length === 0 && <p>No events available</p>}


<ul>
{events.map(e => (
<li key={e.id}>
<span>{e.name}</span>
<button onClick={() => removeEvent(e.id)}>🗑</button>
</li>
))}
</ul>
</div>
);
}