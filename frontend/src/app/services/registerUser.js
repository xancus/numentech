import { z } from 'zod'
import { toast } from 'react-toastify'

const formDataSchema = z.object({
  email: z.string().email('This is not a valid email.'),
  password: z.string()
})

// Register user into the platform
/* Args:
  {
    email: str,
    password: str
  }
**/
// returns status

export async function registerUser (formData) {
  const validatedData = formDataSchema.parse(formData)
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(validatedData)

    })
    const data = await res.json()
    if (!res.ok) {
      throw new Error(data.error)
    }

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
