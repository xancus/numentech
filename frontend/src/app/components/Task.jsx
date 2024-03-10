import { useGetCurrentTime } from '../hooks/useGetCurrentTime'
import { TaskAction } from './TaskActions'
import { cookies } from 'next/headers'

export function Task ({ id, title, description, created_at, user }) {
  // Renders article for specific task.
  // Get session to allow user actions over tasks
  const session = cookies().get('access_token_cookie')

  // format datetime to epoch
  const epochTime = Date.parse(created_at)
  const formattedTime = useGetCurrentTime(epochTime)

  return (
    <article
      style={{
        border: '1px solid rgba(0,0,0,.2)',
        background: 'var(--cards-background-color)'
      }}
      className='flex flex-col gap-4 border rounded-xl p-4 text-primary max-h-[300px] overflow-auto'
    >

      <header className='flex flex-row no-wrap items-center justify-between gap-2'>
        <h2 className='truncate font-medium text-2xl' aria-label={`Task ${title}`}>{title}</h2>
        <h2 className='sr-only'>{title}</h2>
        {session && (
          <TaskAction title={title} description={description} id={id} session={session} user={user} formattedTime={formattedTime} />
        )}
      </header>

      <main>
        <p className='font-normal text-lg text-pretty'>{description}</p>
      </main>

      <footer>
        <span
          className=' font-light text-sm'
          aria-label={`Task created at: ${formattedTime}`}
        >
          {formattedTime} by {user}
        </span>
      </footer>
    </article>
  )
}
