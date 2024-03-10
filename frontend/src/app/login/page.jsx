'use client'
import { useState } from 'react'
import { loginUser } from '../services/loginUser'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function LoginPage () {
  // call login service to get token.
  // We could build it using zustand or some other context manager so we could manage better the sessions. But for this purpose it is fine to have only the token to identify the user
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  async function handleSubmit (ev) {
    ev.preventDefault()
    const formData = {
      email: userEmail,
      password: userPassword
    }
    const res = await loginUser(formData)
    if (res) {
      window.location.replace('/')
    }
  }
  return (
    <main className='grid items-center place-content-center h-screen'>
      <section
        className='bg-[#fff] w-auto md:w-[450px] h-auto md:h-[300px] p-5 border rounded-xl flex flex-col gap-4 m-auto justify-between'
      >
        <h2 className='sr-only'>Sign in</h2>
        <h2 className='font-semibold text-xl text-center'>Sign in</h2>
        <form
          onSubmit={handleSubmit}
          aria-label='Log in user into the platform'
          className='flex flex-col items-start font-medium gap-8'
        >
          <div className='relative w-full flex flex-row no-wrap gap-2 justify-center grow'>
            <div className='relative w-full'>
              <input
                onChange={(ev) => setUserEmail(ev.target.value)}
                value={userEmail}
                placeholder='Email'
                required
                name='email'
                type='email'
                className='px-2 border border-gray-300 rounded-xl py-1  focus:outline-none peer bg-inherit w-full'
              />
            </div>
          </div>
          <div className='relative w-full'>
            <input
              onChange={(ev) => setUserPassword(ev.target.value)}
              value={userPassword}
              placeholder='Password'
              required
              name='password'
              type='password'
              className='px-2 border border-gray-300 rounded-xl py-1  focus:outline-none peer bg-inherit w-full'
            />
          </div>
          <button
            type='submit'
            aria-label='Submit the login action'
            className='border rounded-xl p-2 border-primary hover:bg-primary hover:text-secondary transition'
          >
            Login
          </button>
        </form>
      </section>
      <ToastContainer />
    </main>
  )
}
