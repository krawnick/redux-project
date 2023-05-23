export const ADD_USERS = 'ADD_USERS'

const addUsers = (users) => ({
  type: ADD_USERS,
  payload: users,
})

export const loadUsers = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => dispatch(addUsers(data)))
}
