import { CollapseIcon } from '@/app/icons/collapseIcon'

export function ExpandTask ({ setExpandTask, title, description, formattedTime, user }) {
  return (
    <article
      style={{
        border: '1px solid rgba(0,0,0,.2)'
      }}
      className='flex flex-col gap-4 border rounded-xl p-4 text-primary overflow-auto bg-white w-96 h-96'
    >

      <header className='flex flex-row no-wrap items-center justify-between gap-2 border-b border-[var(--primary-color)]'>
        <h2 className='truncate font-medium text-2xl' aria-label={`Task ${title}`}>{title}</h2>
        <h2 className='sr-only'>{title}</h2>
        <button onClick={() => setExpandTask(false)}>
          <CollapseIcon cls='hover:cursor-pointer hover:scale-105 transition' />
        </button>
      </header>

      <main className='flex-grow'>
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
