import { z } from 'zod'
import { toast } from 'react-toastify'

const formDataSchema = z.object({
  task_id: z.number(),
  task_title: z.string(),
  task_description: z.string(),
  task_user: z.string()
})

export async function updateTask (formData) {
  const validatedData = formDataSchema.parse(formData)
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/task/modify_task`, {
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
    toast.success('Card has been updated succesfully!', {
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
