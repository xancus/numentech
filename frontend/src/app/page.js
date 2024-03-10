import { TasksList } from './components/sections/TasksList'
import { Header } from './components/sections/Header'
import { cookies } from 'next/headers'

export default function Home () {
  // Render header and tasklist sections
  const session = cookies().get('access_token_cookie')
  return (
    <main className='m-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl w-full p-4 flex flex-col no-wrap gap-4 text-primary'>
      <Header />
      <section className='flex flex-col no-wrap w-full gap-1 justify-center items-center md:items-start'>
        <h2 className='sr-only'>Task list application</h2>
        <h2
          aria-label='Task list app'
          className='font-semibold text-3xl'
        >Task list
        </h2>
        {!session && (<span>(Log in and enjoy the full experience)</span>)}
      </section>
      <TasksList />
    </main>
  )
}
