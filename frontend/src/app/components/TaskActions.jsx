'use client'
import { useState } from 'react'
import { EditTaskIcon } from '../icons/EditTaskIcon'
import { RemoveTaskIcon } from '../icons/removeTaskIcon'
import { PopUp } from './PopUp'
import { EditTask } from './specificCardActions/EditTask'
import { RemoveTask } from './specificCardActions/RemoveTask'
import { ExpandIcon } from '../icons/expandIcon'
import { ExpandTask } from './specificCardActions/ExpandTask'

// Renders all the possible actions for specific card and its popup

export function TaskAction ({ id, title, description, user, formattedTime }) {
  const [editTask, setEditTask] = useState(false)
  const [removeTask, setRemoveTask] = useState(false)
  const [expandTask, setExpandTask] = useState(false)
  return (
    <div className='flex flex-row gap-2 no-wrap items-center align-end'>
      <PopUp edit={editTask}>
        <EditTask setEditTask={setEditTask} task_id={id} title={title} description={description} />
      </PopUp>
      <PopUp edit={removeTask}>
        <RemoveTask setRemoveTask={setRemoveTask} task_id={id} />
      </PopUp>
      <PopUp edit={expandTask}>
        <ExpandTask
          setExpandTask={setExpandTask}
          task_id={id}
          title={title}
          description={description}
          user={user}
          formattedTime={formattedTime}
        />
      </PopUp>

      <button onClick={() => setEditTask(!editTask)}>
        <EditTaskIcon cls='hover:cursor-pointer hover:scale-105 transition' />
      </button>
      <button onClick={() => setRemoveTask(!removeTask)}>
        <RemoveTaskIcon cls='hover:cursor-pointer hover:scale-105 transition' />
      </button>
      <button onClick={() => setExpandTask(!expandTask)}>
        <ExpandIcon cls='hover:cursor-pointer hover:scale-105 transition' />
      </button>
    </div>

  )
}
