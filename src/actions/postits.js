export const ADD_POSTIT = 'ADD_POSTIT'
export const TOGGLE_POSTIT = 'TOGGLE_POSTIT'

export const addPostit = (postit) => {
    return { type: 'ADD_POSTIT', postit }
  }
  
  export const toggleTodo = (id) => {
    return { type: 'TOGGLE_POSTIT', id }
  }