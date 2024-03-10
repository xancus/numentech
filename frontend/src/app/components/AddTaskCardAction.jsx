'use client'
import { useState } from 'react'
import { AddIcon } from '../icons/addTask'
import { NewTask } from './NewTask'
import { PopUp } from './PopUp'

export function AddTaskCardAction () {
  // Component used as a main Task to invite users to create New Tasks
  const [newTask, setNewTask] = useState(false)
  return (
    <article
      style={{
        border: '1px solid rgba(0,0,0,.2)',
        background: 'var(--cards-background-color)'
      }}
      className='flex flex-col gap-4 border rounded-xl p-4 bg-[vars(--cards-background-color)] text-primary items-center'
    >
      <PopUp edit={newTask}>
        <NewTask setNewTask={setNewTask} />
      </PopUp>
      <main className='grow items-center flex'>
        <button onClick={() => setNewTask(!newTask)}>
          <AddIcon cls='hover:cursor-pointer hover:scale-105 transition' />
        </button>
      </main>
    </article>
  )
}
