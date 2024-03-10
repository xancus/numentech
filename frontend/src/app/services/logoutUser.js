import { toast } from 'react-toastify'

export async function logoutUser () {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'

    })
    const data = await res.json()
    if (!res.ok) {
      throw new Error(data.error)
    }
    toast.success('Logout succesfully!', {
      position: 'bottom-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })

    return data
  } catch (e) {
    toast.error(e.message || 'Internal Server Error', {
      position: 'bottom-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })
    return null
  }
}
