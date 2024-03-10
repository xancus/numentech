import Link from 'next/link'
import { cookies } from 'next/headers'

export function Header () {
// Nav menu.
// Server component that renders specific nav depending on user session
  const session = cookies().get('access_token_cookie')

  if (!session) {
    return (
      <header>
        <nav>
          <ul className='flex flex-row gap-2 font-medium justify-center md:justify-end'>
            <li className='hover:scale-105 transition hover:font-semibold'><Link href='/login'>Login</Link></li>
            <li aria-hidden>/</li>
            <li className='hover:scale-105 transition hover:font-semibold'><Link href='/register'>Register</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
  return (
    <header>
      <nav>
        <ul className='flex flex-row gap-2 font-medium justify-end'>
          <li className='hover:scale-105 transition hover:font-semibold'>

            <Link href='/logout'>Sign out</Link>

          </li>
        </ul>
      </nav>
    </header>
  )
}
