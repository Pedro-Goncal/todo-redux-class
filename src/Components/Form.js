import { useState } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteAllCompletedTodos } from "../Redux/actions/todoActions";

//Components
import TodoCard from "./TodoCard";

const Form = () => {
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  //Gets the current state for the todos
  const { todos } = useSelector((state) => state.todos);

  //Initializes the dispatch with useDispatch hook
  const dispatch = useDispatch();

  //Logic to see how many remaining todos
  const remainingTodos = todos?.filter((todo) => !todo.completed);

  //Handle input for multiple inputs
  const handleinput = ({ target }) => {
    const { name, value } = target;
    setNewTodo((prev) => ({ ...prev, [name]: value }));
  };

  //Handle submit and checks if the fields are empty
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTodo));
    setNewTodo({ title: "", description: "" });
  };

  return (
    <div className="form__container">
      <div className="form__left">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <input
                type="input"
                name="title"
                className="form__input"
                placeholder="What needs to be done"
                onChange={handleinput}
                value={newTodo.title}
                required
                maxlength="30"
              ></input>
            </div>
            {newTodo.title ? (
              <div className="form__group">
                <textarea
                  name="description"
                  className="form__input"
                  placeholder="Details.."
                  value={newTodo.description}
                  onChange={handleinput}
                />
              </div>
            ) : null}

            <div className="form__group">
              <button className="btn" type="submit">
                Add Todo
              </button>
            </div>
          </form>

          <div className="form__remaining">
            <p>Remaining Todos: {remainingTodos.length}</p>
          </div>

          <div className="form__buttons">
            <button
              className="btn"
              type="submit"
              onClick={() => dispatch(deleteAllCompletedTodos())}
            >
              Delete all compleated
            </button>
          </div>
        </div>
      </div>

      <div className="form__right">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Form;
