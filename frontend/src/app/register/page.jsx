'use client'
import { useState } from 'react'
import { registerUser } from '../services/registerUser'

export default function RegisterPage () {
  // call register service to create user and get Token
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  async function handleSubmit (ev) {
    ev.preventDefault()
    const formData = {
      email: userEmail,
      password: userPassword
    }
    const res = await registerUser(formData)
    if (res) {
      window.location.replace('/')
    }
  }
  return (
    <main className='grid items-center place-content-center h-screen'>
      <section
        className='bg-[#fff] w-auto md:w-[450px] h-auto md:h-[300px] p-5 border rounded-xl flex flex-col gap-4 m-auto justify-between'
      >
        <h2 className='sr-only'>Register</h2>
        <h2 className='font-semibold text-xl text-center'>Register</h2>
        <form
          onSubmit={handleSubmit}
          aria-label='Register user into the platform'
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
            aria-label='Submit the user registration'
            className='border rounded-xl p-2 border-primary hover:bg-primary hover:text-secondary transition'
          >
            Register
          </button>
        </form>
      </section>
    </main>
  )
}
