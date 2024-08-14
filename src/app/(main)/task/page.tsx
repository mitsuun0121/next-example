import { Task } from "@/app/api/tasks/route";

const getTasks = async () => {
  const responce = await fetch('http://localhost:3000/api/tasks', {
    method: 'GET',
    cache: 'no-store'
  });
  return await responce.json();
}

const TaskPage = async () => {
  const tasks = (await getTasks()).tasks as Task[];
  return (
    <div>
      <div>TaskPage</div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>{task.name}</div>
        ))}
      </div>
    </div>
  );
}

export default TaskPage