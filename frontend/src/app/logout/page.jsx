'use client'
import { logoutUser } from '../services/logoutUser'

export default function LogoutPage () {
  // call logout service to remove token.

  async function handleSubmit (ev) {
    ev.preventDefault()
    const res = await logoutUser()
    if (res) {
      window.location.replace('/')
    }
  }
  return (
    <main className='grid items-center place-content-center h-screen'>
      <section
        className='bg-[#fff] w-auto md:w-[360px] h-auto md:h-[150px] p-5 border rounded-xl flex flex-col gap-4 m-auto justify-between'
      >
        <h2 className='sr-only'>Sign out</h2>
        <h2 className='font-semibold text-xl text-center'>Are you sure you want to sign out?</h2>
        <form
          onSubmit={handleSubmit}
          aria-label='Logout from the application'
          className='flex flex-col font-medium gap-8 items-center'
        >
          <button
            type='submit'
            aria-label='Submit the logout action'
            className='border rounded-xl p-2 border-primary hover:bg-primary hover:text-secondary transition'
          >
            Sign out
          </button>
        </form>
      </section>
    </main>
  )
}
