const BASE_URL = 'http://localhost:3001/todos/'

export const loadTodo = async () => {
  const res = await fetch(BASE_URL)
  return res.json()
}

export const createTodo = async (title) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, completed: false }),
  })
  return res.json()
}

export const toggleTodo = async (id, fields) => {
  const res = await fetch('http://localhost:3001/todos/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(fields),
  })
  return await res.json()
}

export const deleteTodo = async (id) => {
  const res = await fetch(BASE_URL + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  await res.json()
  return id
}
