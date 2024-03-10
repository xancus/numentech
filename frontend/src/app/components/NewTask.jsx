'use client'
import { useRouter } from 'next/navigation'
import { createTask } from '../services/createTask'
import { useState } from 'react'

export function NewTask ({ setNewTask }) {
  // Create new task.
  // Attrs to set: [title, description]
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const router = useRouter()

  async function handleForm (ev) {
    ev.preventDefault()

    const formData = {
      task_title: taskTitle,
      task_description: taskDescription,
      task_user: 'test'
    }

    const res = await createTask(formData)
    if (res) {
      setNewTask(false)
      setTaskTitle('')
      setTaskDescription('')
      router.refresh()
    }
  }

  return (
    <section
      className='bg-[#fff] w-auto md:w-[450px] h-auto md:h-[250px] p-5 border rounded-xl flex flex-col gap-4'
    >
      <h2 className='sr-only'>Create new task</h2>
      <h2 className='font-semibold text-xl text-center'>Create new task</h2>
      <form
        onSubmit={handleForm}
        aria-label='Define title and description and add them to a new task'
        className='flex flex-col items-start font-medium gap-8'
      >
        <div className='relative w-full'>
          <input
            required
            onChange={ev => setTaskTitle(ev.target.value)}
            value={taskTitle}
            name='taskTitle'
            type='text'
            className='border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit w-full'
          />
          <label
            htmlFor='taskTitle'
            className={`${taskTitle ? '-top-4 text-xs' : 'top-0'} absolute left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700`}
          >Title
          </label>
        </div>

        <div className='relative w-full'>
          <input
            required
            onChange={ev => setTaskDescription(ev.target.value)}
            value={taskDescription}
            name='taskDescription'
            type='text'
            className='border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit w-full'
          />
          <label
            htmlFor='taskDescription'
            className={`${taskDescription ? '-top-4 text-xs' : 'top-0'} absolute left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700`}
          >Description
          </label>
        </div>

        <div className='relative w-full flex flex-row no-wrap gap-2'>
          <button
            className='border rounded-xl p-2 border-primary hover:bg-primary hover:text-secondary transition'
            aria-label='Cancel the task creation'
            onClick={() => setNewTask(false)}
          >
            Cancel
          </button>
          <button
            type='submit'
            aria-label='Submit the task creation'
            className='border rounded-xl p-2 border-primary hover:bg-primary hover:text-secondary transition'
          >
            Submit
          </button>
        </div>

      </form>
    </section>
  )
}
