import { client } from '../../api'

export const ADD_TODOS = '@@todos/ADD_TODOS'
export const SET_LOADING = '@@todos/SET_LOADING'
export const SET_ERROR = '@@todos/SET_ERROR'

const addTodos = (todos) => ({
  type: ADD_TODOS,
  payload: todos,
})

const setLoading = () => ({
  type: SET_LOADING,
})

const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
})

export const loadTodos = () => (dispatch) => {
  dispatch(setLoading())

  client
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((data) => dispatch(addTodos(data)))
    .catch((error) => dispatch(setError(error)))
}
