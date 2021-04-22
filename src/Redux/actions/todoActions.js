/*
4 action

- addTodo ---> Adds new todo
- removeTodo ---> Delete an existing todo
- completeTodo ---> Marks a todo as completed

*/

export const addTodo = (todo) => (dispatch) => {
  dispatch({
    type: "ADD_TODO",
    payload: todo,
  });
};

export const removeTodo = (id) => (dispatch) => {
  dispatch({
    type: "REMOVE_TODO",
    payload: id,
  });
};

export const completeTodo = (id) => (dispatch) => {
  dispatch({
    type: "COMPLETE_TODO",
    payload: id,
  });
};

export const deleteAllCompletedTodos = () => (dispatch) => {
  dispatch({
    type: "DELETE_ALL_COMPLETED_TODOS",
  });
};
