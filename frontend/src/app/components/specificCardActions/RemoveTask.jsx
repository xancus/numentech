'use client'
import { useRouter } from 'next/navigation'
import { removeTask } from '../../services/removeTask'

export function RemoveTask ({ task_id, setRemoveTask }) {
  // Remove specific task by ID.
  // Refresh router after action
  const router = useRouter()

  async function handleForm (ev) {
    ev.preventDefault()

    const formData = {
      task_id,
      task_user: 'test'
    }

    const res = await removeTask(formData)
    if (res) {
      setRemoveTask(false)
      router.refresh()
    }
  }

  return (
    <section
      className='bg-[#fff] w-auto md:w-[450px] h-auto md:h-[150px] p-5 border rounded-xl flex flex-col gap-4 justify-between'
    >
      <h2 className='sr-only'>Remove task</h2>
      <h2 className='font-semibold text-xl text-center'>Remove this task</h2>
      <form
        onSubmit={handleForm}
        aria-label='Remove this task'
        className='flex flex-col items-start font-medium gap-8'
      >

        <div className='relative w-full flex flex-row no-wrap gap-2 justify-center grow'>
          <button
            type='button'
            className='border rounded-xl p-2 border-primary hover:bg-primary hover:text-secondary transition'
            aria-label='Cancel the task remove'
            onClick={() => setRemoveTask(false)}
          >
            Cancel
          </button>
          <button
            type='submit'
            aria-label='Submit the task remove'
            className='border rounded-xl p-2 border-primary hover:bg-primary hover:text-secondary transition'
          >
            Submit
          </button>
        </div>

      </form>
    </section>
  )
}
