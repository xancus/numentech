import { Task } from '../Task'
import { AddTaskCardAction } from '../AddTaskCardAction'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Get all tasks from database
// Get cookies to know if user is logged in

export async function TasksList () {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/task/get_tasks_data`, {
    method: 'GET',
    cache: 'no-cache'
  })
  const { tasks } = await res.json()
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      <AddTaskCardAction />
      {tasks.map((task) => {
        return (
          <Task key={task.id} {...task} />
        )
      })}
      <ToastContainer />
    </main>
  )
}
